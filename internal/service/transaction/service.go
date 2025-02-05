package transactionService

import "financeApp/internal/port"

type Service struct {
	TransactionRepository port.TransactionRepository
}
