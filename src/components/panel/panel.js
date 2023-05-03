import "./panel.css"
import { lazy, useState } from "react";
import { AddExpense } from "./addExpense";
import { AddUser } from "./addUser";
/* import { Concepts } from "./expenses"; */
import { Cabecera } from "./header";
import Modal from "../modal/modal";
import { CustomButton } from "../CustomButton/button";


const  ResultCalc = lazy(() => import ("./result-calc"));
const  Expenses = lazy(() => import ("./expenses"));


export const Panel = ({ dataSheet }) => {
  
 const [balances,setBalances] = useState(false)
 const [showAddUser,setShowAddUser] = useState(false)
 const [showAddExpense,setShowAddExpense] = useState(false)
 
  return (
    
    <section className="panel">
      
      <Cabecera dataSheet={dataSheet}></Cabecera>

      <div className="panel-content">

        {balances ? (<ResultCalc users={dataSheet.users} total={dataSheet.totalAmount}></ResultCalc>)
                  : (<Expenses expenses={dataSheet.expenses}></Expenses>)
        } 
        
        <div className="panel-controls">

          <CustomButton handlerClick={()=>setShowAddExpense(true)}>Añadir Gasto</CustomButton>
          <Modal showModal={showAddExpense} setShowModal={setShowAddExpense} title="Añadir Gasto">
            <AddExpense dataSheet={dataSheet}/>
          </Modal>
          
          <CustomButton handlerClick={()=>setShowAddUser(true)}>Añadir Usuario</CustomButton>
          <Modal showModal={showAddUser} setShowModal={setShowAddUser} title="Añadir Usuario">
            <AddUser dataSheet={dataSheet}/>
          </Modal>

        </div>

      </div>

    </section>
   
  );
};
