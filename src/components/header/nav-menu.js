import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const Menu = () => {
  const [clicked, setClicked] = useState(false);
  const { user, logoutToken } = useContext(AuthContext);

  
  useEffect(()=>{
    document.addEventListener('click',handleClickOutside)
  },[])
  
  const menu = useRef(null)

  const handleClickOutside = (e) => {
    if(!menu.current.contains(e.target)){
      setClicked(false)
    }
  }
  
  const logout = () => {
    logoutToken();
    setClicked(false);
  };
  return (
    <div ref={menu}>
      <div className="hamburguer" onClick={() => setClicked(!clicked)}>
        <FontAwesomeIcon icon={solid("bars")} />
      </div>
      <nav >
        <ul className={`menu-list ${clicked ? "active" : "inactive"}`}>
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
                <Link to="/">Cerrar Sesion</Link>
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
    </div>
  );
};

