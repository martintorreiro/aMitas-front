import { Link } from "react-router-dom";
import { Menu } from "./nav-menu";
import "./header.css";
import logo from "../../images/logo-ex2.png";

export const MainHeader = () => {
  

  return (
    <header >
      <div>
        <Link to="/">
         <img className="logo" src={logo} alt="logo"/>
        </Link>
        
        <Menu></Menu>
      </div>
    </header>
  );
};
