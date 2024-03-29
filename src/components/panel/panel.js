import "./panel.css";
import { lazy, useState } from "react";
import { AddExpense } from "./addExpense";
import { AddUser } from "./addUser";
import { Cabecera } from "./header";
import Modal from "../modal/modal";
import { CustomButton } from "../CustomButton/button";

const ResultCalc = lazy(() => import("./result-calc"));
const Expenses = lazy(() => import("./expenses"));

export const Panel = ({ dataSheet }) => {
  console.log("sharedList", dataSheet);
  const [sharedList, setSharedList] = useState(false);
  const [balances, setBalances] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <section className="panel">
      <Cabecera
        dataSheet={dataSheet}
        setBalances={setBalances}
        balances={balances}
        setShowSettings={setShowSettings}
      ></Cabecera>

      <div className="panel-content">
        <ResultCalc
          balances={balances}
          users={dataSheet.users}
          total={dataSheet.totalAmount}
        ></ResultCalc>

        <Expenses expenses={dataSheet.expenses} balances={balances}></Expenses>
      </div>

      <div className="panel-controls">
        <CustomButton handlerClick={() => setShowAddExpense(true)}>
          Añadir Gasto
        </CustomButton>

        <CustomButton handlerClick={() => setShowAddUser(true)}>
          Añadir Usuario
        </CustomButton>
      </div>
      <Modal
        showModal={showAddExpense}
        setShowModal={setShowAddExpense}
        title="Añadir Gasto"
      >
        <AddExpense dataSheet={dataSheet} />
      </Modal>
      <Modal
        showModal={showAddUser}
        setShowModal={setShowAddUser}
        title="Añadir Usuario"
      >
        <AddUser dataSheet={dataSheet} />
      </Modal>
      <Modal
        showModal={showSettings}
        setShowModal={setShowSettings}
        title="Mis ajustes"
      >
        <AddUser dataSheet={dataSheet} />
      </Modal>
    </section>
  );
};
