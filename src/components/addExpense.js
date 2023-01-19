import { v4 } from "uuid";
import { useModal } from "../hooks/useModal";

export const AddExpense = ({ users, addExpense }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const handlerForm = async (e) => {
    e.preventDefault();
    const formInputs = {
      concept: e.target.elements.concepto.value,
      user: e.target.elements.select.value,
      date: e.target.elements.date.value,
      amount: Number(e.target.elements.cuantia.value),
    };
    e.target.elements.concepto.value = "";
    e.target.elements.select.value = "";
    e.target.elements.date.value = "";
    e.target.elements.cuantia.value = 0;
    addExpense(formInputs);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>añadir Gasto</button>
      {isOpen ? (
        <div>
          {" "}
          <button onClick={closeModal}>X</button>
          <form onSubmit={handlerForm}>
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
              <input type="text" id="cuantia" name="cuantia" />
            </label>
            <button>Añadir</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
