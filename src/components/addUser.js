import { useState } from "react";
import { useModal } from "../hooks/useModal";

export const AddUser = ({ añadirUsuario }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [name, setName] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    añadirUsuario(name);
    closeModal();
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
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
