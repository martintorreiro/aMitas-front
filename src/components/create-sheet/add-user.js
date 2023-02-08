import { useState } from "react";
import { CustomButton } from "../CustomButton/button";


export const AddUser = ({userList,setUserList,setUserError}) =>{

    const [newUser, setNewUser] = useState("");

    const addUser = (e) => {

        e.preventDefault();
        if(newUser.length>0){
        const findUser = userList.find((element) => element === newUser);
    
        if (findUser === undefined) {
          document.getElementById("newUserInput").value = "";
          setUserList([...userList, newUser]);
          setNewUser("")
          setUserError("");
        } else {
          setUserError(`Ya existe un usuario con ese nombre`);
        }
      }
    };

    return(
      
        <div  className="add-user">
              <input
            id="newUserInput"
            name="new-user"
            placeholder="Nombre"
            onChange={(e) => setNewUser(e.target.value)}
            />
            <CustomButton handleClick={addUser}>AÑADIR</CustomButton>
        </div>
    )
}