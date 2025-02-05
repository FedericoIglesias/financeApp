package main

import (
	"context"
	"financeApp/internal/model"
	"financeApp/internal/port"
)

// App struct
type App struct {
	ctx                context.Context
	TransactionService port.TransactionService
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

func (a *App) RegisterTransaction(transaction *model.Transaction) error {
	err := a.TransactionService.Register(transaction)
	if err != nil {
		return err
	}
	return nil
}
