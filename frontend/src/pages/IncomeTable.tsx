import styled from "styled-components";
import { Table } from "../components/Table";
import { ReadAllIncomes } from "../../wailsjs/go/main/App";
import { model } from "../../wailsjs/go/models";
import { useEffect } from "react";

const IncomeTableStyle = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  h1 {
    margin-bottom: 20px;
  }
  table {
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    thead {
      background-color: #e1e1e1;
    }
    tbody {
      background-color: #f9f9f9;
    }
    th,
    td {
      padding: 10px;
      border: 1px solid #ddd;
    }
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr:hover {
      background-color: #ddd;
    }
  }
`;

let listTrasactions: model.Transaction[] = [];

export const IncomeTable = () => {
  useEffect(() => {
    ReadAllIncomes().then((res) => {
      listTrasactions = res;
    });
  }, [listTrasactions]);
  return (
    <IncomeTableStyle>
      <h1>Tabla Ingresos</h1>
      <Table listTransactions={listTrasactions} />
    </IncomeTableStyle>
  );
};
