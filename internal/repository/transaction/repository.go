package transactionRepository

import "github.com/FedericoIglesias/local_db"

type Repository struct {
	Driver *local_db.Driver
}
