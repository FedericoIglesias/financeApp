import styled from "styled-components";

const BalanceStyle = styled.main`
  display: flex;
`;

export const Balance = () => {
  return (
    <BalanceStyle>
      <h1>Balance</h1>
      <div>
        <p>Resumen</p>
        <p>Ingresos totales: 2000</p>
        <p>Gastos totales: 1200</p>
        <p>Balance: 800</p>
      </div>
      <div>
        <h6>Categorias</h6>
        <p>lista de categorias y sus detalles</p>
      </div>
    </BalanceStyle>
  );
};