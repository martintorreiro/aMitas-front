import { v4 } from "uuid";

export const AddExpense = ({ closeModal, users, añadirGasto }) => {
  const handleForm = async (e) => {
    e.preventDefault();
    const formInputs = {
      concepto: e.target.elements.concepto.value,
      user: e.target.elements.select.value,
      date: e.target.elements.date.value,
      cuantia: Number(e.target.elements.cuantia.value),
    };
    e.target.elements.concepto.value = "";
    e.target.elements.select.value = "";
    e.target.elements.date.value = "";
    e.target.elements.cuantia.value = 0;
    añadirGasto(formInputs);
    closeModal();
  };

  return (
    <div>
      <button onClick={closeModal}>X</button>
      <form onSubmit={handleForm}>
        <label>
          Concepto:
          <input type="text" id="concepto" name="concepto" />
        </label>
        <label>
          Quien pago?
          <select id="select" name="select">
            {users.map((user) => (
              <option key={v4()} value={user}>
                {user}
              </option>
            ))}
          </select>
        </label>
        <label>
          Fecha:
          <input type="date" id="date" name="date" />
        </label>
        <label>
          Cuantía:
          <input type="number" id="cuantia" name="cuantia" />
        </label>
        <button>Añadir</button>
      </form>
    </div>
  );
};
