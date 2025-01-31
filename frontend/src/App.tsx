import styled from "styled-components";

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
  return (
    <Body>
      <Aside>
        <ul>Agregar Entrada</ul>
        <ul>Tabla Gastos</ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
      </Aside>
      
    </Body>
  );
}
