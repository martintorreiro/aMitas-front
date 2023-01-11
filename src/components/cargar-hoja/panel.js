import { useState } from "react";
import { useCalcFunctions } from "../../hooks/useCalcFunctions";
import { AddExpense } from "../addExpense";
import { AddUser } from "../addUser";
import { Calc } from "../calc";
import { Concepts } from "../contepts";
import { ResultCalc } from "../result-calc";
import { Cabecera } from "./header";

export const Panel = ({ dataSheet }) => {
  const [balances, setBalances] = useState(false);
  const { title, users, gastoTotal, resultado, añadirGasto, añadirUsuario } =
    useCalcFunctions(dataSheet);

  return (
    <section className="panel">
      <Cabecera
        dataSheet={dataSheet}
        setBalances={setBalances}
        balances={balances}
      ></Cabecera>
      <div className="panel-content">
        {balances ? (
          <ResultCalc
            resultado={resultado}
            gastoTotal={gastoTotal}
          ></ResultCalc>
        ) : (
          <div>
            <Concepts users={users}></Concepts>

            <AddExpense
              users={users.map((user) => user.nombre)}
              añadirGasto={añadirGasto}
            ></AddExpense>

            <AddUser
              users={users.map((user) => user.nombre)}
              añadirUsuario={añadirUsuario}
            ></AddUser>
          </div>
        )}
      </div>
    </section>
  );
};
