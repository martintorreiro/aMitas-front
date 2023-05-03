import { v4 } from "uuid";
import { CustomButton } from "../CustomButton/button";
import { useState } from "react";
import { ModalForm } from "../form/modalForm";
import { useAddExpense } from "../../hooks/useAddExpense";
import { TextInput } from "../form/textInput";
import { CustomSelect } from "../form/customSelect";
import { CustomDate } from "../form/customDate";

export const AddExpense = ({ dataSheet }) => {

  const {addExpense} = useAddExpense(dataSheet)


  const handlerSubmit = async (e) => {
    e.preventDefault();
    const formInputs = {
      concept: e.target.elements.concepto.value,
      user: e.target.elements.select.value,
      date: e.target.elements.date.value,
      amount: Number(e.target.elements.cuantia.value),
    };

    await addExpense();
  };

  return (<>
            <ModalForm handlerSubmit={handlerSubmit}>

              <TextInput
                name="concepto" 
                label="Concepto" 
                onChange={()=>console.log("concepto")} 
                message="" errorMessage="">
              </TextInput>

              <CustomSelect 
                name="user" 
                label="Pagado por"
                message="" errorMessage=""
                >
                  {dataSheet.users.map((user) => (
                        <option key={v4()} value={user.id}>
                          {user.name}
                        </option>
                    ))}
              </CustomSelect>

              <CustomDate name="date" label="Fecha" message="" errorMessage=""/>

              <TextInput
                name="cuantia" 
                label="Importe" 
                onChange={()=>console.log("importe")} 
                message="" errorMessage="">
              </TextInput>

              <CustomButton>Añadir</CustomButton>

            </ModalForm>
          
          </>)


       
     
  
};
