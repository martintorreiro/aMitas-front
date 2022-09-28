import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { setEmail, setPassword, login, error, loading } = useLogin();

  return (
    <section className="register">
      <h2>Login.</h2>
      <form className="register-form" onSubmit={login}>
        <fieldset>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-container">
            <Link to="/register">
              <p className="button">Register</p>
            </Link>
            <button className="active-button button">Login</button>
          </div>
          {loading ? <p>Loading</p> : <></>}
          {error ? <p>{error}</p> : <></>}
        </fieldset>
      </form>
    </section>
  );
};
