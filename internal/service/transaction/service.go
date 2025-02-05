package transactionService

import "financeApp/internal/port"

type Service struct {
	Tr *port.TransactionRepository
}
