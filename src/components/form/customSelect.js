import "./customSelect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const CustomSelect = ({ name, label, children }) => {
  return (
    <>
      <div className="customSelectContainer">
        <select id={name} name={name}>
          {children}
        </select>
        <span className="arrow">
          <FontAwesomeIcon icon={solid("chevron-down")} />
        </span>
        <label htmlFor={name}>{label}</label>
      </div>
    </>
  );
};
