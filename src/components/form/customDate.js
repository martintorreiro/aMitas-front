import "./customDate.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const CustomDate = ({name, label, message, errorMessage}) => {

    return(
        <>
            <div className={`customDateContainer ${errorMessage&&"error"}`} >

                <input type="date" id={name} name={name}/>
                <label htmlFor={name}>{label}</label>
                {errorMessage&&<div className="errorMsg"><p>{errorMessage}</p></div>}
                {message&&<div className="okMsg"><p>{message}</p></div>}
            </div>
            
        </>
            )
}