import { useState } from "react";
import { Calc } from "./calc";
import { CreateCalcSheet } from "./create-steps";

export const CreateCalc = () => {
  const [calcSheet, setCalcSheet] = useState(false);

  return (
    <section className="calc-container">
      {!calcSheet ? (
        <CreateCalcSheet setCalcSheet={setCalcSheet}></CreateCalcSheet>
      ) : (
        <Calc data={calcSheet}></Calc>
      )}
    </section>
  );
};
