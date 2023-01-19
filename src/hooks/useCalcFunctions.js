import { useEffect, useState } from "react";
import { addUserService } from "../service";

export const useCalcFunctions = (data) => {
  const [users, setUsers] = useState(data.users);
  const [totalCost, setTotalCost] = useState(0);
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState(data.title);

  console.log(users)

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

  const addExpense = (formInputs) => {
    const arrayUsers = [...users];
    const userIndex = arrayUsers.findIndex(
      (user) => user.name === formInputs.user
    );

    arrayUsers[userIndex].concepts.push({
      concept: formInputs.concept,
      amount: formInputs.amount,
    });

    setUsers([...arrayUsers]);
  };

  const addUser = async (userName) => {
    const newUser = {
      name: userName,
      concepts: [],
    };

    try {
      const existUser = await addUserService(userName, data.id);
    } catch (error) {}

    setUsers([...users, newUser]);
  };

  return { title, users, totalCost, result, addUser, addExpense };
};
