import { useState } from "react";

import { CreateCalcSheet } from "../components/create-steps";
import { ProbarEjemplo } from "../components/probar-ejemplo";

export const Probar = () => {
  const [mode, setMode] = useState("test");

  return (
    <section className="test-page">
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

      {mode === "create" && <CreateCalcSheet></CreateCalcSheet>}
      {mode === "test" && <ProbarEjemplo></ProbarEjemplo>}
    </section>
  );
};
