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
          
          <Link to="/">
            <li onClick={() => setClicked(false)}>
              <span>Inicio</span> 
              <FontAwesomeIcon icon={solid("home")} />
            </li>
          </Link>
          
          <Link to="/hoja-de-calculo/example">
            <li onClick={() => setClicked(false)}>
              <span>Pruébalo</span> 
              <FontAwesomeIcon icon={solid("user")} />
            </li>
          </Link>
          
          <Link to="/crear-hoja">
            <li onClick={() => setClicked(false)}>
              <span>Crear Prueba</span> 
              <FontAwesomeIcon icon={solid("user")} />
            </li>
          </Link>

          {user ? (
              <Link to="/">
                <li onClick={logout}>
                  <span>Cerrar Sesion</span> 
                  <FontAwesomeIcon icon={solid("user")} />
                </li>
              </Link>
              ) : (
                <Link to="/login">
                  <li onClick={() => setClicked(false)}>
                    <span>Iniciar Sesion</span>
                    <FontAwesomeIcon icon={solid("user")} />
                  </li>
                </Link>
              
              )}

          <Link to="/register">
            <li onClick={() => setClicked(false)}>
              <span>Registrarse</span>
              <FontAwesomeIcon icon={solid("user-plus")} />
            </li>
          </Link>

        </ul>
      </nav>
    </div>
  );
};

