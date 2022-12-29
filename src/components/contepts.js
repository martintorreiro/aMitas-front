import { v4 } from "uuid";

export const Concepts = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        const conceptos = user.conceptos.map((concepto) => {
          return (
            <li key={v4()}>
              <div>
                <h4>{concepto.concepto}</h4>
                <p>Ha sido pagado por {user.nombre}</p>
              </div>
              <p>{concepto.importe} $</p>
            </li>
          );
        });

        return conceptos;
      })}
    </ul>
  );
};
