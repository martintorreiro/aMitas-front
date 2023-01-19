import { v4 } from "uuid";

export const SeleccionarUsuario = ({ dataSheet, setUser }) => {
  return (
    <div className="select-user">
      <h4>Quien eres?</h4>
      <ul>
        {dataSheet.users.map((element) => {
          return (
            <li key={v4()} onClick={(e) => setUser(element.name)}>
              {element.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
