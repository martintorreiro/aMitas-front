import { useState } from "react";
import { Cuentas } from "../components/calc-example";

export const WorkPage = () => {
  return (
    <section>
      <section>
        <h2>Prueba una lista ya creada</h2>
      </section>
      <section>
        <h2>Crea tu propia lista</h2>
      </section>

      <Cuentas></Cuentas>
    </section>
  );
};
