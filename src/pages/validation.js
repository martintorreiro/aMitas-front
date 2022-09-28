/* import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"; */

export const Validate = () => {
  return (
    <section className="register">
      <h2>Pagina de validacion.</h2>
      <form className="register-form" /* onSubmit={validate} */>
        <fieldset>
          <input
            type="text"
            id="validationCode"
            name="validationCode"
            placeholder="Validation code"
            required
          />

          <div className="button-container">
            <button className="button">Validar</button>
          </div>
          {/*  {loading ? <p>Loading</p> : <></>}
          {error ? <p>{error}</p> : <></>} */}
        </fieldset>
      </form>
    </section>
  );
};
