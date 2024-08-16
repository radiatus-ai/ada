package auth

import (
	"errors"
	"time"

	"github.com/radiatus-ai/auth-service/internal/model"
	"github.com/radiatus-ai/auth-service/internal/repository"
	"github.com/radiatus-ai/auth-service/pkg/jwt"
)

var (
	ErrInvalidCredentials = errors.New("invalid credentials")
	ErrUserAlreadyExists  = errors.New("user already exists")
)

type Service interface {
	Register(email, password string) error
	Login(email, password string) (string, error)
	VerifyToken(token string) (string, error)
}

type service struct {
	userRepo  repository.UserRepository
	jwtSecret string
}

func NewService(userRepo repository.UserRepository, jwtSecret string) Service {
	return &service{
		userRepo:  userRepo,
		jwtSecret: jwtSecret,
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

	userIDString := user.ID.String()

	token, err := jwt.GenerateToken(userIDString, s.jwtSecret, 24*time.Hour)
	if err != nil {
		return "", err
	}

	return token, nil
}

func (s *service) VerifyToken(token string) (string, error) {
	return jwt.GetUserIDFromToken(token, s.jwtSecret)
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
