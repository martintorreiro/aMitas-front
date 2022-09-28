import { Link } from "react-router-dom";
import { DropDownMenu } from "./dropDownMenu";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export const MainHeader = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="navigation-menu">
      <Link to="/">
        <h1>AMitas</h1>
      </Link>
      {user ? <spam>{user}</spam> : null}
      <DropDownMenu></DropDownMenu>
    </header>
  );
};
