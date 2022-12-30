import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
import { v4 } from "uuid";
import { createDataSheetService } from "../service";

export const Step2 = ({ dataSheet, setDataSheet, setStep }) => {
  const [user, setUser] = useState("");
  const [userList, setUserList] = useState([dataSheet.creador]);
  const [userError, setUserError] = useState("");
  const [connectionError, setConnectionError] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    const findUser = dataSheet.usuarios.find(
      (element) => element.nombre === user
    );

    if (findUser === undefined) {
      e.target.elements.user.value = "";
      dataSheet.usuarios = [
        ...dataSheet.usuarios,
        { nombre: user, conceptos: [] },
      ];
      setDataSheet(dataSheet);
      setUserList([...userList, user]);
      setUserError("");
    } else {
      setUserError(`Ya existe un usuario con ese nombre`);
    }
  };

  const createDataSheet = async () => {
    try {
      const resp = await createDataSheetService(dataSheet);
      console.log(resp);
    } catch (error) {
      setConnectionError(error.message);
    }
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
        {userError && (
          <div>
            <FontAwesomeIcon icon={solid("triangle-exclamation")} />{" "}
            <p>{userError}</p>{" "}
          </div>
        )}
      </form>
      <div className="controls">
        <button onClick={() => setStep(1)}>Anterior</button>
        <button onClick={createDataSheet}>Crear</button>
      </div>
    </>
  );
};
