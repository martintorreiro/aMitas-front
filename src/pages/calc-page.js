import { useState } from "react";
import { Calc } from "../components/calc";
import { CreateCalc } from "../components/create-calc";

export const Cuentas = () => {
  const [mode, setMode] = useState("test");

  return (
    <>
      <h3>Pagina de Cuentas</h3>

      <section>
        <h3>Selecciona una opcion</h3>
        <section className="selection-box" onClick={(e) => setMode("create")}>
          <h4>Crear pagina</h4>
          {/* <p>Crea una nueva pagina de cuentas de ejemplo en la que trabajar</p> */}
        </section>
        <section className="selection-box" onClick={(e) => setMode("test")}>
          <h4>Probar ejemplo</h4>
          {/*  <p>
            Prueba una plantilla de ejemplo en la que podras añadir gastos y
            hacerte una idea de como funciona
          </p> */}
        </section>
      </section>
      {mode === "create" ? <CreateCalc></CreateCalc> : <></>}
      {mode === "test" ? <Calc></Calc> : <></>}
    </>
  );
};
