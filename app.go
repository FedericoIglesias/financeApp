package main

import (
	"context"
	"financeApp/model"
	"fmt"

	"github.com/FedericoIglesias/local_db"
)

// App struct
type App struct {
	ctx context.Context
}

func (a *App) initDB() (*local_db.Driver, error) {
	driver, err := local_db.New("db", nil)
	if err != nil {
		return nil, fmt.Errorf("Error creating database: %v", err)
	}
	return driver, nil
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}
func (a *App) RegisterTransaction(transaction model.Transaction) (bool, error) {
	driver, err := a.initDB()
	if err != nil {
		return false, err
	}

	err = driver.Write("transactions", transaction.ID, transaction)
	if err != nil {
		return false, fmt.Errorf("Error writing transaction: %v", err)
	}

	return true, nil
}
