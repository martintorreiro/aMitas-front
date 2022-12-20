import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import { AddExpense } from "../components/addExpense";
import { AddUser } from "../components/addUser";
import { useCalcFunctions } from "../hooks/useCalcFunctions";

export const Cuentas = () => {
  const { mode } = useParams();

  const { users, gastoTotal, resultado, añadirGasto, añadirUsuario } =
    useCalcFunctions(mode);

  console.log(mode);
  return (
    <>
      <h3>ejemplo cuentas</h3>
      <ul>
        {users.map((user) => {
          return user.conceptos.map((concepto) => {
            return (
              <li key={v4()}>
                <div>
                  <h4>{concepto.concepto}</h4>
                  <p>Ha sido pagado por {user.nombre}</p>
                </div>
                <p>{concepto.importe} $</p>
              </li>
            );
          });
        })}
      </ul>
      <p>Total: {gastoTotal}</p>
      <AddExpense
        users={users.map((user) => user.nombre)}
        añadirGasto={añadirGasto}
      ></AddExpense>

      <AddUser
        users={users.map((user) => user.nombre)}
        añadirUsuario={añadirUsuario}
      ></AddUser>

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
    </>
  );
};
