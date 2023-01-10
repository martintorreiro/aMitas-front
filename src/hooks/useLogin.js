import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { loginService } from "../service";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setLoading("Loading");
    try {
      const loginResponse = await loginService(email, password);

      loginToken(loginResponse.message.token, email);

      navigate("/");
    } catch (error) {
      setLoading("");
      setError(error.message);
    } finally {
      setLoading("");
    }
  };

  return { setEmail, setPassword, login, error, loading };
};
