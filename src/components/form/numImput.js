import "./textInput.css";
import validator from "validator";

export const NumInput = ({ name, label, setValue, value, error }) => {
  const validateDecimal = (str) => {
    return validator.isDecimal(str, [
      { force_decimal: false, decimal_digits: "2", locale: "en-US" },
    ]);
  };

  const handleChange = (e) => {
    if (validateDecimal(e.target.value) || e.target.value.length == 0) {
      console.log(Number(e.target.value));
      setValue(Number(e.target.value));
    }
  };

  return (
    <>
      <div className={`textInputContainer ${error && "error"}`}>
        <input
          className={value && "written"}
          type="number"
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />

        <label htmlFor={name}>{label}</label>
        {error && (
          <div className="errorMsg">
            <p>{error}</p>
          </div>
        )}
      </div>
    </>
  );
};
