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
  const { title, users, totalCost, result, addExpense, addUser } =
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
            resultado={result}
            gastoTotal={totalCost}
          ></ResultCalc>
        ) : (
          <div>
            <Concepts users={users}></Concepts>

            <AddExpense
              users={users.map((user) => user.name)}
              addExpense={addExpense}
            ></AddExpense>

            <AddUser
              addUser={addUser}
            ></AddUser>
          </div>
        )}
      </div>
    </section>
  );
};
