import "./customSelect.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const CustomSelect = ({name, label, children, message, errorMessage}) => {

    return(
        <>
            <div className={`customSelectContainer ${errorMessage&&"error"}`} >

                <select id={name} name={name}>
                   {children}
                </select>
                <span className="arrow"><FontAwesomeIcon icon={solid("chevron-down")} /></span>
                <label htmlFor={name}>{label}</label>
                {errorMessage&&<div className="errorMsg"><p>{errorMessage}</p></div>}
                {message&&<div className="okMsg"><p>{message}</p></div>}
            </div>
            
        </>
            )
}