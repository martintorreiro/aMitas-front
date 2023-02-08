import { useState } from "react";
import { useCalcFunctions } from "../../hooks/useCalcFunctions";
import { AddExpense } from "./addExpense";
import { AddUser } from "./addUser";
import { Concepts } from "./contepts";
import { ResultCalc } from "./result-calc";
import { Cabecera } from "./header";
import "./panel.css"


export const Panel = ({ dataSheet }) => {
  const [balances, setBalances] = useState(false);
  const { users, totalCost, result, addExpense, addUser, addUserError } = useCalcFunctions(dataSheet);

  return (
    <section className="panel">
      <Cabecera
        dataSheet={dataSheet}
        setBalances={setBalances}
        balances={balances}
      ></Cabecera>
      <div className="panel-content">
        {balances ? (<ResultCalc resultado={result} gastoTotal={totalCost}></ResultCalc>)
                  : (<Concepts users={users}></Concepts>)
        }
        <div className="panel-controls">
          <AddExpense
            users={users.map((user) => user.name)}
            addExpense={addExpense}
          ></AddExpense>
          <AddUser addUserError={addUserError} addUser={addUser}></AddUser>
        </div>
      </div>
    </section>
  );
};
