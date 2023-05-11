import { v4 } from "uuid";
import React from "react";

export const ResultCalc = ({ users, total, balances }) => {
  return (
    <>
      {balances && (
        <div>
          <h4>Resultado cuentas</h4>
          <ul>
            {users.map((user) => {
              return (
                <li key={v4()}>
                  Usuario: {user.name} Resultado: {user.balance}
                </li>
              );
            })}
          </ul>
          <p>Total: {total}</p>
        </div>
      )}
    </>
  );
};

export default ResultCalc;
