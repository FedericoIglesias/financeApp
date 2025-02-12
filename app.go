package main

import (
	"context"
	"encoding/json"
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
		return nil, fmt.Errorf("error creating database: %v", err)
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
		return false, fmt.Errorf("error writing transaction: %v", err)
	}

	return true, nil
}

func (a *App) ReadAllIncomes() ([]model.Transaction, error) {
	driver, err := a.initDB()
	if err != nil {
		return nil, err
	}

	transactions, err := driver.ReadAll("transactions")
	if err != nil {
		return nil, fmt.Errorf("error reading transactions: %v", err)
	}

	var incomes []model.Transaction

	for _, transaction := range transactions {
		var t model.Transaction
		err := json.Unmarshal([]byte(transaction), &t)
		if err != nil {
			return nil, fmt.Errorf("error unmarshalling transaction: %v", err)
		}
		if t.Type == "income" {
			incomes = append(incomes, t)
		}
	}

	return incomes, nil
}

func (a *App) ReadAllExpenses() ([]model.Transaction, error) {
	driver, err := a.initDB()
	if err != nil {
		return nil, fmt.Errorf("error reading transactions: %v", err)
	}

	transactions, err := driver.ReadAll("transactions")
	if err != nil {
		return nil, fmt.Errorf("error reading transactions: %v", err)
	}

	var expense []model.Transaction

	for _, transaction := range transactions {
		var t model.Transaction
		err := json.Unmarshal([]byte(transaction), &t)
		if err != nil {
			return nil, fmt.Errorf("error unmarshalling transaction: %v", err)
		}
		if t.Type == "expense" {
			expense = append(expense, t)
		}
	}

	return expense, nil

}
