package model

import "encoding/json"

type Transaction struct {
	ID       json.Number
	Category string
	Amount   json.Number
	Date     json.Number
}
