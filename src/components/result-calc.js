import { v4 } from "uuid";

export const ResultCalc = ({ resultado, gastoTotal }) => {
  return (
    <>
      <h4>Resultado cuentas</h4>
      <ul>
        {resultado.map((user) => {
          return (
            <li key={v4()}>
              Usuario: {user.usuario} Resultado: {user.resultado}
            </li>
          );
        })}
      </ul>
      <p>Total: {gastoTotal}</p>
    </>
  );
};
