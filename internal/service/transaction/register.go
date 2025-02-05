package transactionService

import "financeApp/internal/model"

func (s *Service) RegisterTr(transaction *model.Transaction) error {
	err := s.TransactionRepository.Register(transaction)
	if err != nil {
		return err
	}
	return nil
}
