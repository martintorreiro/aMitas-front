import { useEffect, useState } from "react";
import { addUserService } from "../service";

export const useCalcFunctions = (data) => {
  const [users, setUsers] = useState(data.usuarios);
  const [gastoTotal, setGastoTotal] = useState(0);
  const [resultado, setResultado] = useState([]);
  const [title, setTitle] = useState(data.titulo);

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

  const añadirUsuario = async (userName) => {
    const newUser = {
      nombre: userName,
      conceptos: [],
    };

    try {
      const existUser = await addUserService(userName, data.id);
    } catch (error) {}

    setUsers([...users, newUser]);
  };

  return { title, users, gastoTotal, resultado, añadirGasto, añadirUsuario };
};
