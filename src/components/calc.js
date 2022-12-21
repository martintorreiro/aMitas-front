import { AddExpense } from "../components/addExpense";
import { AddUser } from "../components/addUser";
import { useCalcFunctions } from "../hooks/useCalcFunctions";
import { Concepts } from "./contepts";
import { ResultCalc } from "./result-calc";

export const Calc = () => {
  const { users, gastoTotal, resultado, añadirGasto, añadirUsuario } =
    useCalcFunctions();

  return (
    <>
      <Concepts users={users} gastoTotal={gastoTotal}></Concepts>

      <AddExpense
        users={users.map((user) => user.nombre)}
        añadirGasto={añadirGasto}
      ></AddExpense>

      <AddUser
        users={users.map((user) => user.nombre)}
        añadirUsuario={añadirUsuario}
      ></AddUser>

      <ResultCalc resultado={resultado}></ResultCalc>
    </>
  );
};
