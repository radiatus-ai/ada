package model

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	ID            uuid.UUID `gorm:"type:uuid;primary_key;"`
	Email         string    `gorm:"unique;not null"`
	GoogleID      string    `gorm:"unique"`
	Password      string
	CreatedAt     time.Time
	UpdatedAt     time.Time
	Organizations []Organization `gorm:"many2many:user_organizations;"`
}

func (u *User) BeforeCreate(tx *gorm.DB) error {
	if u.ID == uuid.Nil {
		u.ID = uuid.New()
	}
	return nil
}
