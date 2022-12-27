import { useState } from "react";
import { Calc } from "../components/calc";
import { CreateCalc } from "../components/create-calc";
import "../style-sheets/calc-page.css";

export const Cuentas = () => {
  const [mode, setMode] = useState("test");

  return (
    <section className="calc-page">
      <h3>Pagina de Cuentas</h3>

      <ul className="select-mode">
        <li
          className={mode === "test" ? "selection-box active" : "selection-box"}
          onClick={(e) => setMode("test")}
        >
          Probar ejemplo
        </li>
        <li
          className={
            mode === "create" ? "selection-box active" : "selection-box"
          }
          onClick={(e) => setMode("create")}
        >
          Crear pagina
        </li>
      </ul>
      {mode === "create" ? <CreateCalc></CreateCalc> : <></>}
      {mode === "test" ? <Calc></Calc> : <></>}
    </section>
  );
};
