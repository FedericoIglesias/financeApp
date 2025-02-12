import styled from "styled-components";
import { Table } from "../components/Table";
import { model } from "../../wailsjs/go/models";
import { ReadAllExpenses } from "../../wailsjs/go/main/App";

const ExpenseTableStyle = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  h1 {
    margin-bottom: 20px;
  }
  Table {
    margin-top: 20px;
    text-align: center;
    thead {
      background-color: #84b5c6;
      td {
        padding: 10px;
      }
    }
    tbody {
      padding: 10px;
      tr {
        &:nth-child(even) {
          background-color: #d1d1d1;
        }
        &:nth-child(odd) {
          background-color: #a2a2a2;
        }
        &:hover {
          background-color: #aa9619;
          cursor: pointer;
        }
        td {
          padding: 10px;
        }
      }
    }
  }
`;

let listTransactions: model.Transaction[] = [];
ReadAllExpenses().then((res) => {
  listTransactions = res;
});

export const ExpenseTable = () => {
  return (
    <ExpenseTableStyle>
      <h1>Tabla Gastos</h1>
      <Table listTransactions={listTransactions} />
    </ExpenseTableStyle>
  );
};
