import { Link } from "react-router-dom";
import { DropDownMenu } from "./dropDownMenu";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { SelectModeModal } from "./selection-mode-modal";
import { useModal } from "../hooks/useModal";

export const MainHeader = () => {
  const { user } = useContext(AuthContext);
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <header className="navigation-menu">
      <Link to="/">
        <h1>AMitas</h1>
      </Link>
      {user ? <span>{user}</span> : null}
      <DropDownMenu openModal={openModal}></DropDownMenu>

      <SelectModeModal
        closeModal={closeModal}
        isOpen={isOpen}
      ></SelectModeModal>
    </header>
  );
};
