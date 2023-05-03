import { v4 } from "uuid";
import { CustomButton } from "../CustomButton/button";
import { useState } from "react";
import { ModalForm } from "../form/modalForm";
import { useAddExpense } from "../../hooks/useAddExpense";
import { TextInput } from "../form/textInput";
import { CustomSelect } from "../form/customSelect";
import { CustomDate } from "../form/customDate";
import { NumInput } from "../form/numImput";

export const AddExpense = ({ dataSheet }) => {
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");

  const { addExpense } = useAddExpense(dataSheet);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await addExpense(e.target.elements.user.value, concept, amount);
  };

  return (
    <>
      <ModalForm handlerSubmit={handlerSubmit}>
        <TextInput
          name="concepto"
          label="Concepto"
          setValue={setConcept}
          value={concept}
        ></TextInput>

        <CustomSelect name="user" label="Pagado por">
          {dataSheet.users.map((user) => (
            <option key={v4()} value={user.id}>
              {user.name}
            </option>
          ))}
        </CustomSelect>

        <CustomDate name="date" label="Fecha" message="" errorMessage="" />

        <NumInput
          name="cuantia"
          label="Importe"
          setValue={setAmount}
          value={amount}
        ></NumInput>

        <CustomButton>Añadir</CustomButton>
      </ModalForm>
    </>
  );
};
