package transactionRepository

import models "financeApp/internal/model"

func (r *Repository) Register(transaction *models.Transaction) error {
	err := r.Driver.Write("transactions", transaction.ID.String(), &transaction)
	if err != nil {
		return err
	}
	return nil
}
