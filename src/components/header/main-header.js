import { Link } from "react-router-dom";
import { Menu } from "./nav-menu";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import "./header.css";

export const MainHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <header >
      <div>
        <Link to="/">
          <h1>AMitas</h1>
        </Link>
        {user ? <span>{user}</span> : null}
        <Menu></Menu>
      </div>
    </header>
  );
};
