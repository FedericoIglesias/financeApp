import styled from "styled-components";
import { Table } from "../components/Table";
import entry from "../data/entry.json";

const ExpenseTableStyle = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  h1 {
    margin-bottom: 20px;
  }
  Table {
    margin-top: 20px;
    thead {
      background-color: #84b5c6;
      padding: 10px;
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

export const ExpenseTable = () => {
  return (
    <ExpenseTableStyle>
      <h1>Tabla Gastos</h1>
      <Table listTransactions={[]} />
    </ExpenseTableStyle>
  );
};
