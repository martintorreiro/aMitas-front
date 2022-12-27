import { Link } from "react-router-dom";
import { DropDownMenu } from "./dropDownMenu";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import "../style-sheets/header.css";

export const MainHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="navigation-menu">
      <Link to="/">
        <h1>AMitas</h1>
      </Link>
      {user ? <span>{user}</span> : null}
      <DropDownMenu></DropDownMenu>
    </header>
  );
};
