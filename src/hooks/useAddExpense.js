import { useEffect, useState } from "react";
import { addExpenseService } from "../service";

export const useAddExpense = (data) => {
  const [addExpenseError, setAddExpenseError] = useState("");

  const addExpense = async (userId, concept, amount) => {
    try {
      await addExpenseService(userId, concept, amount);

      return true;
    } catch (error) {
      setAddExpenseError(error.message);
      return false;
    }
  };

  return { addExpense, addExpenseError };
};
