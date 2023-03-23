import { useEffect, useState } from "react";
import { addExpenseService, addUserService } from "../service";

export const useCalcFunctions = (data) => {
  
  const [addExpenseError, setAddExpenseError] = useState("");
  const [addUserError, setAddUserError] = useState("");

  console.log("users", data.users);



  const addExpense = async (dataId, concept, amount) => {


    
    try {
      await addExpenseService(dataId, concept, amount)
      
      return true;
    } catch (error) {
      
      setAddExpenseError(error.message);
      return false;
    }


   
  };

  const addUser = async (userName) => {
    const newUser = {
      name: userName,
      concepts: [],
    };

    try {
      await addUserService(userName, data.id);
      
      return true;
    } catch (error) {
    
      setAddUserError(error.message);
      return false;
    }
  };

  return { addUser, addExpense, addUserError };
};
