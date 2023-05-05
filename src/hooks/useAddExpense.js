import { useEffect, useState } from "react";
import { addExpenseService } from "../service";

export const useAddExpense = (data) => {
  const [addExpenseError, setAddExpenseError] = useState("");
  const [resAddExpense, setResAddExpense] = useState("");

  const addExpense = async (userId, concept, amount) => {
    try {
      const res = await addExpenseService(userId, concept, amount);
      setResAddExpense(res.message)
      setAddExpenseError("")
      return true;
    } catch (error) {
      setAddExpenseError(error.message);
      setResAddExpense("")
      return false;
    }
  };

  return { addExpense, addExpenseError, resAddExpense };
};
