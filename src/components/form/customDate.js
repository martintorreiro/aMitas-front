import "./customDate.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const CustomDate = ({name, label,value,setValue}) => {
console.log(value)
    return(
        <>
            <div className="customDateContainer">

                <input type="date" id={name} name={name} value={value} onChange={(e)=>setValue(e.target.value)}/>
                <label htmlFor={name}>{label}</label>
            </div>
            
        </>
            )
}