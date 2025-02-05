package port

import models "financeApp/internal/model"

type TransactionRepository interface {
	// FindAll() ([]models.Transaction, error)
	// FindByDate(date string) ([]models.Transaction, error)
	Register(transaction *models.Transaction) error
	// Delete(transaction models.Transaction) error
	// Update(transaction models.Transaction) error
}

type TransactionService interface {
	Register(transaction *models.Transaction) error
}
