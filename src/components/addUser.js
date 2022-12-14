import { useModal } from "../hooks/useModal";

export const AddUser = ({añadirGasto }) => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div>
        <button onClick={openModal}>Añadir usuario</button>
        {isOpen?<div> <button onClick={closeModal}>X</button>
        <form>
          <label>
            Nombre usuario:
            <input type="text" id="add-user" name="add-user" />
          </label>

          <button>Añadir</button>
        </form></div>:<></>}
       
      </div>
    </>
  );
};
