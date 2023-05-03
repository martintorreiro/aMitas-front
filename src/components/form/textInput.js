import { useEffect } from "react"
import "./textInput.css"

export const TextInput = ({name, label, handleChange, message, errorMessage}) => {


    return(
        <>
            <div className={`textInputContainer ${errorMessage&&"error"}`} >

                <input
                    type="text"
                    id={name}
                    name={name}
                    onChange={handleChange}
                />

                <label htmlFor={name}>{label}</label>
                {errorMessage&&<div className="errorMsg"><p>{errorMessage}</p></div>}
                {message&&<div className="okMsg"><p>{message}</p></div>}
                
            </div>
            
        </>
            )
}