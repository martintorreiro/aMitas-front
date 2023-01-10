import { v4 } from "uuid";

export const Concepts = ({ users }) => {
  console.log(users)
  return (
    <ul>
      {users.map((user) => {
        const conceptos = user.conceptos.map((concepto) => {
          console.log("->",concepto)
          return  concepto?(
            <li key={v4()}>
              <div>
                <h4>{concepto.concepto}</h4>
                <p>Ha sido pagado por {user.nombre}</p>
              </div>
              <p>{concepto.importe} $</p>
            </li>
          ):null
        });
        console.log(conceptos)
        return conceptos;
      })}
    </ul>
  );
};
