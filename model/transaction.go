package model

// import "encoding/json"

type Transaction struct {
	ID          string `json:"id"`
	Type        string `json:"type"`
	Amount      string `json:"amount"`
	Date        string `json:"date"`
	Description string `json:"description"`
}
