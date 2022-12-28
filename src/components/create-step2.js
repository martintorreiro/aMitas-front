import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
import { v4 } from "uuid";

export const Step2 = ({ dataSheet, setDataSheet, setStep, setCalcSheet }) => {
  const [user, setUser] = useState("");
  const [userList, setUserList] = useState([dataSheet.creador]);
  const [userError, setUserError] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const findUser = userList.find((element) => element === user);
    if (findUser === undefined) {
      e.target.elements.user.value = "";
      setUserList([...userList, user]);
      setUserError("");
    } else {
      setUserError(`Ya existe un usuario con ese nombre`);
    }
  };

  const createDataSheet = () => {
    dataSheet.usuarios = userList.map((user) => {
      return { nombre: user, conceptos: [] };
    });

    console.log(dataSheet);
    setCalcSheet(dataSheet);
  };

  return (
    <>
      <p>Liste los participantes</p>
      <ul>
        {userList.map((user) => (
          <li key={v4()}>{user}</li>
        ))}
      </ul>
      <form onSubmit={handlesubmit} className="add-user-form">
        <input
          name="user"
          placeholder="Nombre"
          onChange={(e) => setUser(e.target.value)}
        />
        <button>Añadir participante</button>
        {userError ? (
          <div>
            <FontAwesomeIcon icon={solid("triangle-exclamation")} />{" "}
            <p>{userError}</p>{" "}
          </div>
        ) : (
          <></>
        )}
      </form>
      <div className="controls">
        <button onClick={() => setStep(1)}>Anterior</button>
        <button onClick={createDataSheet}>Crear</button>
      </div>
    </>
  );
};
