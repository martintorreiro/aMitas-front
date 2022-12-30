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
    <div>
      <div className="hamburguer" onClick={() => setClicked(!clicked)}>
        <FontAwesomeIcon icon={solid("bars")} />
      </div>
      <nav className={`menu-list ${clicked ? "active" : "inactive"}`}>
        <ul>
          <Link to="/">
            <li onClick={() => setClicked(false)}>Inicio</li>
          </Link>
          {user ? (
            <Link to="/">
              <li onClick={logout}>Logout</li>
            </Link>
          ) : (
            <Link to="/login">
              <li onClick={() => setClicked(false)}>Login/Register</li>
            </Link>
          )}

          <Link to="/hoja-de-calculo/example">
            <li onClick={() => setClicked(false)}>Pruébalo</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
