import { useState } from "react";
import { Step1 } from "./create-step1";
import { Step2 } from "./create-step2";

export const CreateCalcSheet = () => {
  const [step, setStep] = useState(1);
  const [dataSheet, setDataSheet] = useState({
    titulo: "",
    descipcion: "",
    creador: "",
    moneda: "EUR",
  });

  return (
    <section className="steps panel">
      <h4>Crear (Paso {step} de 2)</h4>

      {step === 1 && (
        <Step1
          setDataSheet={setDataSheet}
          dataSheet={dataSheet}
          setStep={setStep}
        ></Step1>
      )}
      {step === 2 && (
        <Step2
          setStep={setStep}
          dataSheet={dataSheet}
          setDataSheet={setDataSheet}
        ></Step2>
      )}
    </section>
  );
};
