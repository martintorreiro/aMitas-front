import { useState } from "react";

import { Calc } from "./calc";
import { Step1 } from "./create-step1";
import { Step2 } from "./create-step2";

export const CreateCalc = () => {
  const [step, setStep] = useState(1);
  const [created, setCreated] = useState([]);
  const [userList, setUserList] = useState([]);

  return (
    <section className="calc-container">
      {created.length < 1 ? (
        <div className="steps">
          <h4>Crear (Paso {step} de 2)</h4>

          {step === 1 ? (
            <Step1 setUserList={setUserList} setStep={setStep}></Step1>
          ) : (
            <></>
          )}
          {step === 2 ? (
            <Step2
              setStep={setStep}
              setCreated={setCreated}
              userList={userList}
              setUserList={setUserList}
            ></Step2>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      {created.length > 1 ? <Calc data={created}></Calc> : <></>}
    </section>
  );
};
