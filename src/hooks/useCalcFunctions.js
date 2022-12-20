import { useEffect, useState } from "react";
import usersJSON from "../users-example.json";

export const useCalcFunctions = (mode) => {
  const [users, setUsers] = useState(mode === "test" ? usersJSON : []);
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

    arrayUsers[userIndex].conceptos.push({
      concepto: formInputs.concepto,
      importe: formInputs.cuantia,
    });

    setUsers([...arrayUsers]);
  };

  const añadirUsuario = (userName) => {
    const newUser = {
      nombre: userName,
      conceptos: [],
    };

    setUsers([...users, newUser]);
  };

  return { users, gastoTotal, resultado, añadirGasto, añadirUsuario };
};
