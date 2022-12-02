import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useModal } from "../hooks/useModal";
import { AddExpense } from "./addExpense";
import { AddUser } from "./addUser";

export const Cuentas = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [users, setUsers] = useState([
    {
      nombre: "Manuel",
      conceptos: [{ concepto: "Gasolina", importe: 60 }],
    },
    {
      nombre: "Antonio",
      conceptos: [],
    },
    {
      nombre: "Maria",
      conceptos: [
        { concepto: "Comida", importe: 100 },
        { concepto: "Gasolina", importe: 100 },
      ],
    },
    {
      nombre: "Rodrigo",
      conceptos: [{ concepto: "Hotel", importe: 230 }],
    },
  ]);

  const [gastoTotal, setGastoTotal] = useState(0);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    console.log();
    const importeUsuarios = users.map((user) => {
      return {
        nombre: user.nombre,
        importe: user.conceptos.reduce((a, b) => {
          if (user.conceptos.length === 0) {
            return 0;
          } else if (user.conceptos.length === 1) {
            return user.conceptos[0].importe;
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
      <button onClick={openModal}>Añadir usuario</button>
      <button onClick={openModal}>Añadir gasto</button>
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
      {isOpen ? (
        <AddExpense
          closeModal={closeModal}
          users={users.map((user) => user.nombre)}
          añadirGasto={añadirGasto}
        ></AddExpense>
      ) : (
        <></>
      )}
      {isOpen ? (
        <AddUser
          closeModal={closeModal}
          users={users.map((user) => user.nombre)}
          añadirGasto={añadirGasto}
        ></AddUser>
      ) : (
        <></>
      )}
    </>
  );
};
