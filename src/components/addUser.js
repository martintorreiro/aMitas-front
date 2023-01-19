import { useState } from "react";
import { useModal } from "../hooks/useModal";
import { addUserService } from "../service";

export const AddUser = ({ addUser, addUserError }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [name, setName] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const saved = await addUser(name);
    if (saved) {
      closeModal();
    }
  };
  return (
    <>
      <div>
        <button onClick={openModal}>Añadir usuario</button>
        {isOpen ? (
          <div>
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
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
