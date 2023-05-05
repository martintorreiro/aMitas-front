import { useEffect } from "react";
import "./textInput.css";
import validator from "validator";

export const TextInput = ({ name, label, setValue, value, error }) => {
  const handleChange = (e) => {
    if (
      validator.isAlphanumeric(e.target.value) ||
      e.target.value.length == 0
    ) {
      setValue(e.target.value);
    }
  };

  return (
    <>
      <div className={`textInputContainer ${error && "error"}`}>
        <input
          className={value && "written"}
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
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
