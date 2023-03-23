import "./panel.css"
import { lazy, useState } from "react";
import { useCalcFunctions } from "../../hooks/useCalcFunctions";
import { AddExpense } from "./addExpense";
import { AddUser } from "./addUser";
import { Concepts } from "./contepts";
import { Cabecera } from "./header";
const  ResultCalc = lazy(() => import ("./result-calc"));


export const Panel = ({ dataSheet }) => {
  const [balances, setBalances] = useState(false);
  const [users, setUsers] = useState(dataSheet.users);
  const [expenses, setExpenses] = useState(dataSheet.expenses);
  const { addExpense, addUser, addUserError } = useCalcFunctions(dataSheet);

  return (
    <section className="panel">
      <Cabecera
        dataSheet={dataSheet}
        setBalances={setBalances}
        balances={balances}
      ></Cabecera>
      <div className="panel-content">
        {balances ? (<ResultCalc users={users} total={dataSheet.totalAmount}></ResultCalc>)
                  : (<Concepts expenses={expenses}></Concepts>)
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
