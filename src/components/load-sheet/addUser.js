import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { addUserService } from "../../service";
import { CustomButton } from "../CustomButton/button";
import { ToggleModal } from "../ToggleModal/toggleModal";

export const AddUser = ({ addUser, addUserError }) => {
  
  const [name, setName] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const saved = await addUser(name);
    if (saved) {
     
    }
  };


  return (<ToggleModal buttonLabel="AÑADIR USUARIO">

            <form className="addExpenseForm" onSubmit={handlerSubmit}>
              <label>
                Nombre usuario:
                <input
                  type="text"
                  id="add-user"
                  name="add-user"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <CustomButton>Añadir</CustomButton>
            </form>

            

        </ToggleModal>)
/*   return isOpen ? 
          (<div>
            <button onClick={closeModal}>X</button>
            <form onSubmit={handlerSubmit}>
              <label>
                Nombre usuario:
                <input
                  type="text"
                  id="add-user"
                  name="add-user"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <button>Añadir</button>
            </form>
            {addUserError && <p>{addUserError}</p>}
          </div>) 
          : (
          <CustomButton handleClick={openModal}>AÑADIR USUARIO</CustomButton>
          ) */
    
  
};
