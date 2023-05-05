import { useState } from "react";
import "./textInput.css";

export const NumInput = ({ name, label, setValue, value, error }) => {

  const handleBlur = (e) => {
    if(e.target.value.length>0){
      const num = Number(e.target.value).toFixed(2)
      setValue(num);
    }
  }

  return (
    <>
      <div className={`textInputContainer ${error && "error"}`}>
        <input
          className={value && "written"}
          type="number"
          step="any"
          value={value}
          id={name}
          name={name}
          onChange={(e)=>setValue(e.target.value)}
          onBlur={handleBlur}
        />

        <label htmlFor={name}>{label}</label>
        {error && (
          <div className="inputError">
            <p>{error}</p>
          </div>
        )}
      </div>
    </>
  );
};
