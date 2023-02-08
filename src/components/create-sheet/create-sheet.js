import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { v4 } from "uuid";
import { createDataSheetService } from "../../service";
import { useNavigate } from "react-router-dom";
import { AddUser } from "./add-user";

export const CreateCalcSheet = () => {
  const [title, setTitle] = useState("");
  const [badge, setBadge] = useState("EUR");
  const [description, setDescription] = useState();
  const [userList, setUserList] = useState([]);
  const [userError, setUserError] = useState("");
  const [connectionError, setConnectionError] = useState("");

  const navigate = useNavigate();
console.log(userList)
  const handlesubmit = async (e) => {
    e.preventDefault();

    const dataSheet = {
      title: title,
      description: description,
      badge: badge,
      users: userList.map((user) => {
        return { name: user, concepts: [] };
      }),
    };
    const url = await createDataSheetService(dataSheet);
    navigate(`/hoja-de-calculo/${url}`);
  };

  const deleteUser = async (e) => {
    
    const updatedUserList = userList.filter(
      (user) => {
        console.log(user,e.target.dataset.username)
       return user !== e.target.dataset.username}
    );
    
    setUserList(updatedUserList);
  };



  return (
    <section className="calc-form">
      <h2>Crear nueva hoja de calculo</h2>
      <form onSubmit={handlesubmit}>
        <label>
          Titulo
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            spellCheck="false"
          />
        </label>

        <label>
          Moneda
          <input
            type="text"
            value={badge}
            spellCheck="false"
            onChange={(e) => setBadge(e.target.value)}
          />
        </label>
        <label>
          Descripcion
          <textarea
            spellCheck="false"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <h3>Inserte los participantes</h3>
        <ul className="user-list">
          {userList.map((user) => (
            <li key={v4()}>
              
              <p>{user}</p>
              <button data-username={user} type="button" onClick={deleteUser}>
              x
                 {/* <FontAwesomeIcon icon={regular("trash-can")} />  */}
          
              </button>
            </li>
          ))}
        </ul>

       <AddUser  setUserList={setUserList} setUserError={setUserError} userList={userList}></AddUser>

        {userError && (
          <div>
            <FontAwesomeIcon icon={solid("triangle-exclamation")} />
            <p>{userError}</p>
          </div>
        )}

        <button className="bg-blue">CREAR</button>
      </form>
    </section>
  );
};
