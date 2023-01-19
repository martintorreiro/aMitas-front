import { useEffect, useState } from "react";
import { addExpenseService, addUserService } from "../service";

export const useCalcFunctions = (data) => {
  const [users, setUsers] = useState(data.users);
  const [totalCost, setTotalCost] = useState(0);
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState(data.title);
  const [addUserError, setAddUserError] = useState("");

  console.log("users", users);

  useEffect(() => {
    const usersAmount = users.map((user) => {
      return {
        name: user.name,
        amount: user.concepts.reduce((a, b) => {
          if (user.concepts.length === 0) {
            return 0;
          }
          return a + b.amount;
        }, 0),
      };
    });

    const total = usersAmount.reduce((a, b) => a + b.amount, 0);
    setTotalCost(total);

    const avgExpense = Math.round((total / users.length) * 100) / 100;

    const calcResult = usersAmount.map((user) => {
      return {
        name: user.name,
        result: user.amount - avgExpense,
      };
    });
    setResult(calcResult);
  }, [users]);

  const addExpense = async (dataId, concept, amount) => {
    await addExpenseService(dataId, concept, amount);

    /*    const arrayUsers = [...users];
    const userIndex = arrayUsers.findIndex(
      (user) => user.name === formInputs.user
    );

    arrayUsers[userIndex].concepts.push({
      concept: formInputs.concept,
      amount: formInputs.amount,
    });

    setUsers([...arrayUsers]); */
  };

  const addUser = async (userName) => {
    const newUser = {
      name: userName,
      concepts: [],
    };

    try {
      await addUserService(userName, data.id);
      setUsers([...users, newUser]);
      return true;
    } catch (error) {
      console.log("error", error.message);
      setAddUserError(error.message);
      return false;
    }
  };

  return { title, users, totalCost, result, addUser, addExpense, addUserError };
};
