export const AddUser = ({ closeModal, users, añadirGasto }) => {
  return (
    <>
      <div>
        <button onClick={closeModal}>X</button>
        <form>
          <label>
            Nombre usuario:
            <input type="text" id="add-user" name="add-user" />
          </label>

          <button>Añadir</button>
        </form>
      </div>
    </>
  );
};
