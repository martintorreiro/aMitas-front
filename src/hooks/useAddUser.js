import { useState } from "react";
import { addUserService } from "../service";

export const useAddUser = (dataSheet) => {
  
    const [errorMessage, setErrorMessage] = useState("");
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState(dataSheet.users);

    const addUser = async (userName) => {

    try {
      const response = await addUserService(userName, dataSheet.id);
      setUsers(response.data)
      setMessage(response.message);
      setErrorMessage("")
      return true;
    } catch (error) {
      console.log(error.message)
      setMessage("")
      setErrorMessage(error.message);
      return false;
    }
  };

  return { addUser, users, errorMessage, message };
};
