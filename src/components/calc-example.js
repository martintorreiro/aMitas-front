import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useModal } from "../hooks/useModal";
import { AddExpense } from "./addExpense";

export const Cuentas = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [users, setUSers] = useState([
    {
      nombre: "Manuel",
      importe: 60,
      conceptos: [{ concepto: "Gasolina", importe: 60 }],
    },
    {
      nombre: "Antonio",
      importe: 0,
      conceptos: [],
    },
    {
      nombre: "Maria",
      importe: 200,
      conceptos: [
        { concepto: "Comida", importe: 100 },
        { concepto: "Gasolina", importe: 100 },
      ],
    },
    {
      nombre: "Rodrigo",
      importe: 230,
      conceptos: [{ concepto: "Hotel", importe: 230 }],
    },
  ]);

  const [gastoTotal, setGastoTotal] = useState(0);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    let gasto = 0;
    users.map((user) => {
      gasto += user.importe;
    });
    setGastoTotal(gasto);
    const gastoMedio = Math.round((gasto / users.length) * 100) / 100;

    let resultadoCuentas = [];
    users.map((user) => {
      resultadoCuentas.push({
        usuario: user.nombre,
        resultado: user.importe - gastoMedio,
      });
    });
    setResultado(resultadoCuentas);
  }, [users]);

  const añadirGasto = (gasto) => {
    const arrayUsers = [...users];
    console.log(arrayUsers);
  };

  return (
    <>
      <h3>ejemplo cuentas</h3>;
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
      <button>Añadir usuario</button>
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
    </>
  );
};
