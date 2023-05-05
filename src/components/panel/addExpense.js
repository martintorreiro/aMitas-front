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
const date = new Date()

  const [concept, setConcept] = useState("");
  const [conceptErr, setConceptErr] = useState("");
  const [amount, setAmount] = useState("")
  const [amountErr, setAmountErr] = useState("");
  const [paymentDate, setPaymentDate] = useState(date.toJSON().slice(0,10))

  const { addExpense,addExpenseError,resAddExpense } = useAddExpense(dataSheet);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if(!concept){
      setConceptErr("Campo obligatorio")
    }else{
      setConceptErr("")
    }

    if(!amount){
      setAmountErr("Campo obligatorio")
    }else{
      setAmountErr("")
    }

    if(amount&&concept){

      await addExpense(e.target.elements.user.value, concept, amount, paymentDate);
    }
    
  };

  return (
    <>
      {addExpenseError&&<p>{addExpenseError}</p>}
      {resAddExpense&&<p>{resAddExpense}</p>}
      <ModalForm handlerSubmit={handlerSubmit}>
        <TextInput
          name="concepto"
          label="Concepto"
          setValue={setConcept}
          value={concept}
          error={conceptErr}
        ></TextInput>

        <CustomSelect name="user" label="Pagado por">
          {dataSheet.users.map((user) => (
            <option key={v4()} value={user.id}>
              {user.name}
            </option>
          ))}
        </CustomSelect>

        <CustomDate name="date" label="Fecha" value={paymentDate} setValue={setPaymentDate} />

        <NumInput
          name="cuantia"
          label="Importe"
          setValue={setAmount}
          value={amount}
          error={amountErr}
        ></NumInput>

        <CustomButton>Añadir</CustomButton>
      </ModalForm>
    </>
  );
};
