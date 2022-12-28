import { useState } from "react";
import { Step1 } from "./create-step1";
import { Step2 } from "./create-step2";

export const CreateCalcSheet = ({ setCalcSheet }) => {
  const [step, setStep] = useState(1);
  const [dataSheet, setDataSheet] = useState({
    titulo: "",
    descipcion: "",
    creador: "",
    moneda: "EUR",
  });

  console.log(dataSheet);

  return (
    <div className="steps">
      <h4>Crear (Paso {step} de 2)</h4>

      {step === 1 ? (
        <Step1
          setDataSheet={setDataSheet}
          dataSheet={dataSheet}
          setStep={setStep}
        ></Step1>
      ) : (
        <></>
      )}
      {step === 2 ? (
        <Step2
          setStep={setStep}
          dataSheet={dataSheet}
          setDataSheet={setDataSheet}
          setCalcSheet={setCalcSheet}
        ></Step2>
      ) : (
        <></>
      )}
    </div>
  );
};
