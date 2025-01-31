import styled from "styled-components";
import { AddEntry } from "./pages/AddEntry";
import { useState } from "react";

const Body = styled.body`
  background-color: #f1f1f1;
  height: 100dvh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  font-family: Arial, sans-serif;
  color: black;
`;

const Aside = styled.aside`
  padding: 20px;
  margin: 20px 0px;
  font-size: 18px;
  border-right: 2px solid black;
  ul {
    padding: 10px;
  }
  ul:hover {
    cursor: pointer;
    background-color: #d1d1d1;
  }
`;

export function App() {
  const [component, setComponent] = useState("");
  return (
    <Body>
      <Aside>
        <ul onClick={() => setComponent("AddEntry")}>Agregar Entrada</ul>
        <ul onClick={() => setComponent("expenseTable")}>Tabla Gastos</ul>
        <ul onClick={() => setComponent("incomeTable")}>Tabla Ingesos</ul>
      </Aside>
      {component === "AddEntry" ? <AddEntry /> : null}
      {component === "expenseTable" ? <h1>Tabla Gastos</h1> : null}
      {component === "incomeTable" ? <h1>Tabla Ingresos</h1> : null}
      {component === "" ? (
        <h1 style={{ padding: "20px", textAlign: "center" }}>Bienvenido</h1>
      ) : null}
    </Body>
  );
}
