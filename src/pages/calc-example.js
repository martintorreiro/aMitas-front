import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { AddExpense } from "../components/addExpense";
import { AddUser } from "../components/addUser";
import usersJSON from "../users-example.json"

export const Cuentas = () => {
  
  const [users, setUsers] = useState(usersJSON);
  const [gastoTotal, setGastoTotal] = useState(0);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
   
    const importeUsuarios = users.map((user) => {
      return {
        nombre: user.nombre,
        importe: user.conceptos.reduce((a, b) => {
          if (user.conceptos.length === 0) {
            return 0;
          } 
          return a + b.importe;
        }, 0),
      };
    });

    const gasto = importeUsuarios.reduce((a, b) => a + b.importe, 0);
    setGastoTotal(gasto);

    const gastoMedio = Math.round((gasto / users.length) * 100) / 100;

    const resultadoCuentas = importeUsuarios.map((user) => {
      return {
        usuario: user.nombre,
        resultado: user.importe - gastoMedio,
      };
    });
    setResultado(resultadoCuentas);
  }, [users]);

  const añadirGasto = (formInputs) => {
    const arrayUsers = [...users];
    const userIndex = arrayUsers.findIndex(
      (user) => user.nombre === formInputs.user
    );
    console.log(formInputs.cuantia);
    arrayUsers[userIndex].conceptos.push({
      concepto: formInputs.concepto,
      importe: formInputs.cuantia,
    });

    setUsers([...arrayUsers]);
  };

  return (
    <>
      <h3>ejemplo cuentas</h3>
      <ul>
        {users.map((user) => {
          return user.conceptos.map((concepto) => {
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
        })}
      </ul>
      <p>Total: {gastoTotal}</p>
      <AddExpense
          users={users.map((user) => user.nombre)}
          añadirGasto={añadirGasto}
        ></AddExpense>
      
      
        <AddUser
          users={users.map((user) => user.nombre)}
          añadirGasto={añadirGasto}
        ></AddUser>
      
      <h4>Resultado cuentas</h4>
      <ul>
        {resultado.map((user) => {
          return (
            <li key={v4()}>
              Usuario: {user.usuario} Resultado: {user.resultado}
            </li>
          );
        })}
      </ul>
      
        
      
    </>
  );
};
