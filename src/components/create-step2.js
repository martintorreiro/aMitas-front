import { useState } from "react";
import { v4 } from "uuid";

export const Step2 = ({ setUserList, userList, setCreated, setStep }) => {
  const [user, setUser] = useState("");

  const create = () => {
    const calcSheet = userList.map((user) => {
      return { nombre: user, conceptos: [] };
    });

    setCreated([...calcSheet]);

    console.log(userList);
  };
  return (
    <>
      <p>Liste los participantes</p>
      <ul>
        {userList.map((user) => (
          <li key={v4()}>{user}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target.elements.user.value = "";
          setUserList([...userList, user]);
        }}
      >
        <input
          name="user"
          placeholder="Nombre"
          onChange={(e) => setUser(e.target.value)}
        />
        <button>Añadir participante</button>
      </form>
      <div className="controls">
        <button onClick={() => setStep(1)}>Anterior</button>
        <button onClick={create}>Crear</button>
      </div>
    </>
  );
};
