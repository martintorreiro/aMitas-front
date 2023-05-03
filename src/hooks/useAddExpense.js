import { useEffect, useState } from "react";
import { addExpenseService } from "../service";

export const useAddExpense = (data) => {
  
  const [addExpenseError, setAddExpenseError] = useState("");

  const addExpense = async (dataId, concept, amount) => {

    try {
      await addExpenseService(dataId, concept, amount)
      
      return true;
    } catch (error) {
      setAddExpenseError(error.message);
      return false;
    }


   
  };

  return { addExpense };
};
