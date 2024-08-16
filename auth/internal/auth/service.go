package auth

import (
	"context"
	"errors"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
	"github.com/radiatus-ai/auth-service/internal/model"
	"github.com/radiatus-ai/auth-service/internal/repository"
	"google.golang.org/api/idtoken"
)

type Service interface {
	Register(email, password string) error
	Login(email, password string) (string, error)
	LoginGoogle(token string) (string, error)
	VerifyToken(token string) (string, error)
}

type service struct {
	userRepo       repository.UserRepository
	orgRepo        repository.OrganizationRepository
	jwtSecret      string
	googleClientID string
}

func NewService(userRepo repository.UserRepository, orgRepo repository.OrganizationRepository, jwtSecret, googleClientID string) Service {
	return &service{
		userRepo:       userRepo,
		orgRepo:        orgRepo,
		jwtSecret:      jwtSecret,
		googleClientID: googleClientID,
	}
}

func (s *service) Register(email, password string) error {
	exists, err := s.userRepo.ExistsByEmail(email)
	if err != nil {
		return err
	}
	if exists {
		return ErrUserAlreadyExists
	}

	hashedPassword, err := hashPassword(password)
	if err != nil {
		return err
	}

	user := &model.User{
		Email:    email,
		Password: hashedPassword,
	}

	return s.userRepo.Create(user)
}

func (s *service) Login(email, password string) (string, error) {
	user, err := s.userRepo.GetByEmail(email)
	if err != nil {
		return "", err
	}

	if !checkPasswordHash(password, user.Password) {
		return "", ErrInvalidCredentials
	}

	return s.generateToken(user.ID)
}

func (s *service) LoginGoogle(token string) (string, error) {
	payload, err := idtoken.Validate(context.Background(), token, s.googleClientID)
	if err != nil {
		return "", err
	}

	googleID := payload.Subject
	email := payload.Claims["email"].(string)

	user, err := s.userRepo.GetByGoogleID(googleID)
	if err != nil {
		if errors.Is(err, repository.ErrUserNotFound) {
			// Create new user
			user = &model.User{
				Email:    email,
				GoogleID: googleID,
			}
			if err := s.userRepo.Create(user); err != nil {
				return "", err
			}
		} else {
			return "", err
		}
	}

	return s.generateToken(user.ID)
}

func (s *service) VerifyToken(tokenString string) (string, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("unexpected signing method")
		}
		return []byte(s.jwtSecret), nil
	})

	if err != nil {
		return "", err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		userID, ok := claims["sub"].(string)
		if !ok {
			return "", errors.New("invalid user ID in token")
		}
		return userID, nil
	}

	return "", errors.New("invalid token")
}

func (s *service) generateToken(userID uuid.UUID) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": userID.String(),
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	return token.SignedString([]byte(s.jwtSecret))
}

// Helper functions for password hashing
func hashPassword(password string) (string, error) {
	// Implement password hashing (e.g., using bcrypt)
	return password, nil // Placeholder
}

func checkPasswordHash(password, hash string) bool {
	// Implement password hash checking
	return password == hash // Placeholder
}
