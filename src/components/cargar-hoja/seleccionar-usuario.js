import { v4 } from "uuid";

export const SeleccionarUsuario = ({ dataSheet, setUser }) => {
  return (
    <div>
      <h4>Quien eres?</h4>
      <ul>
        {dataSheet.usuarios.map((element) => {
          return (
            <li key={v4()} onClick={(e) => setUser(element.nombre)}>
              {element.nombre}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
