import styled from "styled-components";

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
  return (
    <AddEntryStyle>
      <h1>Agregar Entrada</h1>
      <label htmlFor="">Valor:</label>
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
    </AddEntryStyle>
  );
};
