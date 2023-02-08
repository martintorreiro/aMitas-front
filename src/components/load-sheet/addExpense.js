import { v4 } from "uuid";
import { useModal } from "../../hooks/useModal";
import { CustomButton } from "../CustomButton/button";
import { ToggleModal } from "../ToggleModal/toggleModal";

export const AddExpense = ({ users, addExpense }) => {
  
  const handlerForm = async (e) => {
    e.preventDefault();
    const formInputs = {
      concept: e.target.elements.concepto.value,
      user: e.target.elements.select.value,
      date: e.target.elements.date.value,
      amount: Number(e.target.elements.cuantia.value),
    };

    await addExpense();
  };

  return (<ToggleModal buttonLabel="AÑADIR GASTO">

            <form className="addExpenseForm " onSubmit={handlerForm}>

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

              <CustomButton>Añadir</CustomButton>

            </form>

        </ToggleModal>)


       
     
  
};
