import { useState } from "react";
import { Calc } from "../calc";
import { Cabecera } from "./header";
import { SeleccionarUsuario } from "./seleccionar-usuario";

export const CargarHoja = ({ dataSheet }) => {
  const [user, setUser] = useState("");

  return (
    <section className="cargar-hoja panel">
      <Cabecera dataSheet={dataSheet}></Cabecera>

      {user ? (
        <Calc data={dataSheet}></Calc>
      ) : (
        <SeleccionarUsuario
          dataSheet={dataSheet}
          setUser={setUser}
        ></SeleccionarUsuario>
      )}
    </section>
  );
};
