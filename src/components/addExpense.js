import { v4 } from "uuid";

export const AddExpense = ({ closeModal, users, añadirGasto }) => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <button onClick={closeModal}>X</button>
      <form onSubmit={handleForm}>
        <label>
          Concepto:
          <input type="text" name="contepto" />
        </label>
        <label>
          Quien pago?
          <select name="select">
            {users.map((user) => (
              <option key={v4()}>{user}</option>
            ))}
          </select>
        </label>
        <label>
          Fecha:
          <input type="date" />
        </label>
        <label>
          Cuantía:
          <input type="number" />
        </label>
        <button onClick={añadirGasto}>Añadir</button>
      </form>
    </div>
  );
};
