import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

export  const Register = () => {
  const {
    setUserName,
    setEmail,
    setPassword,
    setPassworConfirm,
    register,
    error,
    loading,
  } = useRegister();

  return (
    <section className="register">
      <h2>Registrate para una mejor experiencia.</h2>
      <form className="register-form" onSubmit={register}>
        <fieldset>
          <input
            type="text"
            name="userName"
            placeholder="User name"
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <input
            type="password"
            name="confirmPass"
            placeholder="Confirm Password"
            required
            onChange={(e) => {
              setPassworConfirm(e.target.value);
            }}
          />

          <div className="button-container">
            <Link to="/login">
              <p className="button">Login</p>
            </Link>
            <button className="active-button button">Register</button>
          </div>
          {loading ? <p>Loading</p> : <></>}
          {error ? <p>{error}</p> : <></>}
        </fieldset>
      </form>
    </section>
  );
};


export default  Register;