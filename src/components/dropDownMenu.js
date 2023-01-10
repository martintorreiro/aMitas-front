import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const DropDownMenu = () => {
  const [clicked, setClicked] = useState(false);
  const { user, logoutToken } = useContext(AuthContext);

  const logout = () => {
    logoutToken();
    setClicked(false);
  };
  return (
    <>
      <div className="hamburguer" onClick={() => setClicked(!clicked)}>
        <FontAwesomeIcon icon={solid("bars")} />
      </div>
      <nav className={`menu-list ${clicked ? "active" : "inactive"}`}>
        <ul>
          <li onClick={() => setClicked(false)}>
            <Link to="/">Inicio </Link>
          </li>

          <li onClick={() => setClicked(false)}>
            <Link to="/hoja-de-calculo/example">Pruébalo</Link>
          </li>

          <li onClick={() => setClicked(false)}>
            <Link to="/crear-hoja">Crear Prueba</Link>
          </li>

          {user ? (
            <li onClick={logout}>
              <Link to="/">Logout </Link>
            </li>
          ) : (
            <li onClick={() => setClicked(false)}>
              <Link to="/login">Iniciar Sesion</Link>
            </li>
          )}

          <li onClick={() => setClicked(false)}>
            <Link to="/Register">Registrarse</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
