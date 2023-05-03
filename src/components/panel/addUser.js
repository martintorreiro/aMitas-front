import { useEffect, useState } from "react";


import { CustomButton } from "../CustomButton/button";
import Modal from "../modal/modal";
import { v4 } from "uuid";
import { TextInput } from "../form/textInput";
import { ModalForm } from "../form/modalForm";
import { useAddUser } from "../../hooks/useAddUser";

export const AddUser = ({dataSheet}) => {
  
  const [name, setName] = useState("");
  

  const { addUser, message, users, errorMessage } = useAddUser(dataSheet);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(name);
    e.target.elements.addUser.value = "";
    setName("")
  };

  const handleChange = (e) => {

    setName(e.target.value)

    if(!name.length>2){

    }

  }

  return (
          <>
        
            <ul className="userList">
              {users.map((user)=><li key={v4()}>{user.name}</li>)}
            </ul>

            <ModalForm handlerSubmit={handleSubmit}>

              <TextInput 
              name="addUser" 
              label="Nombre usuario" 
              handleChange={handleChange} 
              message={message} errorMessage={errorMessage}
              />

              <CustomButton>Añadir</CustomButton>
            
            </ModalForm>
          
           </>
              )
};


/* ([A-Za-z])\w+ */