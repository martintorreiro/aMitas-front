/* import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"; */

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { validateService } from "../service";
import { useNavigate } from "react-router-dom";


export const Validate = () => {
  const [inputCode,setInputCode] = useState("")
  const [error,setError]= useState("")
  const [loading,setLoading]= useState("")
  const { state } = useLocation();
  console.log("state",state)
  const navigate = useNavigate();

const handleSubmit = async  (e) => {

e.preventDefault()

try { 
  const resValidation = await  validateService(state.email,inputCode)
  navigate("/login")
} catch (error) {
  console.log("error",error)
  setError(error.message)
}



}


  return (
    <section className="register">
      <h2>Pagina de validacion.</h2>
      <form className="register-form"  onSubmit={handleSubmit} >
        <fieldset>
          <input
            type="text"
            id="validationCode"
            name="validationCode"
            placeholder="Validation code"
            onChange={(e)=>setInputCode(e.target.value)}
            required
          />

          <div className="button-container">
            <button className="button">Validar</button>
          </div>
            {loading ? <p>Loading</p> : <></>}
          {error ? <p>{error}</p> : <></>} 
        </fieldset>
      </form>
    </section>
  );
};
