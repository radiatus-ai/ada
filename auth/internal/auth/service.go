package auth

import (
	"context"
	"errors"
	"log"
	"strings"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
	"github.com/radiatus-ai/auth-service/internal/model"
	"github.com/radiatus-ai/auth-service/internal/repository"
	"google.golang.org/api/idtoken"
)

type Service interface {
	LoginGoogle(token string) (*UserData, error)
	VerifyToken(token string) (string, error)
}

type service struct {
	userRepo       repository.UserRepository
	orgRepo        repository.OrganizationRepository
	jwtSecret      string
	googleClientID string
	emailWhitelist []string
}

func NewService(userRepo repository.UserRepository, orgRepo repository.OrganizationRepository, jwtSecret, googleClientID string, emailWhitelist []string) Service {
	return &service{
		userRepo:       userRepo,
		orgRepo:        orgRepo,
		jwtSecret:      jwtSecret,
		googleClientID: googleClientID,
		emailWhitelist: emailWhitelist,
	}
}

type UserData struct {
	Token string     `json:"token"`
	User  model.User `json:"user"`
}

func (s *service) LoginGoogle(token string) (*UserData, error) {
	log.Println("Starting Google login process")
	payload, err := idtoken.Validate(context.Background(), token, s.googleClientID)
	if err != nil {
		log.Printf("Failed to validate Google token: %v", err)
		return nil, err
	}

	googleID := payload.Subject
	email := payload.Claims["email"].(string)
	log.Printf("Google login attempt for email: %s", email)

	if !s.isEmailAllowed(email) {
		log.Printf("Email %s is not in the whitelist", email)
		return nil, ErrUnauthorizedEmail
	}

	user, err := s.userRepo.GetByGoogleID(googleID)
	if err != nil {
		if errors.Is(err, repository.ErrUserNotFound) {
			log.Printf("User not found, creating new user for email: %s", email)
			user = &model.User{
				Email:    email,
				GoogleID: googleID,
			}
			if err := s.userRepo.Create(user); err != nil {
				log.Printf("Failed to create user: %v", err)
				return nil, err
			}

			log.Printf("Creating new organization for user: %s", email)
			org := &model.Organization{
				Name: email,
			}
			if err := s.orgRepo.Create(org); err != nil {
				log.Printf("Failed to create organization: %v", err)
				return nil, err
			}

			if err := s.orgRepo.AddUser(org.ID, user.ID); err != nil {
				log.Printf("Failed to add user to organization: %v", err)
				return nil, err
			}
		} else {
			log.Printf("Error retrieving user: %v", err)
			return nil, err
		}
	} else {
		log.Printf("Existing user found for email: %s", email)
	}

	token, err = s.generateToken(user.ID)
	if err != nil {
		log.Printf("Failed to generate token: %v", err)
		return nil, err
	}
	log.Println("Successfully generated token")
	return &UserData{
		Token: token,
		User:  *user,
	}, nil
}

func (s *service) isEmailAllowed(email string) bool {
	log.Printf("Checking if email is allowed: %s", email)
	for _, allowed := range s.emailWhitelist {
		if strings.HasSuffix(email, allowed) {
			log.Printf("Email %s is allowed", email)
			return true
		}
	}
	log.Printf("Email %s is not allowed", email)
	return false
}

func (s *service) VerifyToken(tokenString string) (string, error) {
	log.Println("Verifying token")
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			log.Println("Unexpected signing method")
			return nil, errors.New("unexpected signing method")
		}
		return []byte(s.jwtSecret), nil
	})

	if err != nil {
		log.Printf("Error parsing token: %v", err)
		return "", err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		userID, ok := claims["sub"].(string)
		if !ok {
			log.Println("Invalid user ID in token")
			return "", errors.New("invalid user ID in token")
		}
		log.Printf("Token verified for user ID: %s", userID)
		return userID, nil
	}

	log.Println("Invalid token")
	return "", errors.New("invalid token")
}

func (s *service) generateToken(userID uuid.UUID) (string, error) {
	log.Printf("Generating token for user ID: %s", userID)
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
