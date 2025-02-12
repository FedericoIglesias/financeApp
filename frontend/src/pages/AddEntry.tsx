import { useState } from "react";
import styled from "styled-components";
import * as models from "../../wailsjs/go/models";
import { RegisterTransaction } from "../../wailsjs/go/main/App";

const AddEntryStyle = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  input {
    margin-bottom: 10px;
    width: 200px;
  }
  select {
    margin-bottom: 10px;
    width: 200px;
  }
  button {
    width: 100px;
    padding: 10px;
    background-color: #f1f1f1;
    border: 1px solid black;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background-color: #d1d1d1;
    }
  }
`;

export const AddEntry = () => {
  const [transaction, setTransaction] = useState<models.model.Transaction>({
    amount: "",
    type: "",
    date: "",
    description: "",
    id: new Date().getTime().toString(),
  });

  const saveTransacion = async () => {
    RegisterTransaction(transaction);
  };

  return (
    <AddEntryStyle>
      <h1>Agregar Entrada</h1>
      <label htmlFor="">Valor:</label>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => {
          setTransaction({ ...transaction, amount: e.target.value });
        }}
      />
      <label htmlFor="">Description:</label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) =>
          setTransaction({ ...transaction, description: e.target.value })
        }
      />
      <label htmlFor="">Fecha:</label>
      <input
        type="date"
        name=""
        id=""
        onChange={(e) =>
          setTransaction({
            ...transaction,
            date: new Date(e.target.value).getTime().toString(),
          })
        }
      />
      <select
        name=""
        id=""
        onChange={(e) =>
          setTransaction({
            ...transaction,
            type: e.currentTarget.value.toString(),
          })
        }
      >
        <option value=""></option>
        <option value="expense">Gasto</option>
        <option value="income">Ingreso</option>
      </select>
      <button onClick={() => saveTransacion()}>Guardar</button>
    </AddEntryStyle>
  );
};
