package repository

import "github.com/FedericoIglesias/local_db"

func InitDB() (*local_db.Driver, error) {
	driver, err := local_db.New("db", nil)
	if err != nil {
		return nil, err
	}
	return driver, nil
}
