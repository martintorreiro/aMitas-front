import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

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
        <img src="/menu-hamburguesa.svg" alt="icon menu" height="40px"></img>
      </div>
      <nav className={`menu-list ${clicked ? "active" : "inactive"}`}>
        <ul>
          <Link to="/">
            <li onClick={() => setClicked(false)}>Home</li>
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

          <Link to="/work-page">
            <li onClick={() => setClicked(false)}>Work Page</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
