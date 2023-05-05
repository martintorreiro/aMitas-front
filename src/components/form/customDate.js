import "./customDate.css";

export const CustomDate = ({ name, label, value, setValue }) => {
  return (
    <>
      <div className="customDateContainer">
        <input
          type="date"
          id={name}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </>
  );
};
