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

const AddEntrance = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  input{
    margin-bottom: 10px;
    width: 200px;
  }
  select{
    margin-bottom: 10px;
    width: 200px;
  }
  button{
    width: 100px;
    padding: 10px;
    background-color: #f1f1f1;
    border: 1px solid black;
    border-radius: 5px;
    &:hover{
      cursor: pointer;
      background-color: #d1d1d1;
    }
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
      <AddEntrance>
        <h1>Agregar Entrada</h1>
        <label htmlFor="">Valor</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Concepto:</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Fecha:</label>
        <input type="date" name="" id="" />
        <select name="" id="">
          <option value=""></option>
          <option value="">Gasto</option>
          <option value="">Ingreso</option>
        </select>
        <button>Guardar</button>
      </AddEntrance>
    </Body>
  );
}
