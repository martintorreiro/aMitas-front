import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../service";

export const useRegister = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPassworConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setError("");
    setLoading("Loading");
    try {
      if (password !== passwordConfirm) {
        throw new Error("Las contraseñas no coinciden!");
      }
      await registerService(userName, email, password);

      navigate("/validate");
    } catch (error) {
      setLoading("");
      setError(error.message);
    } finally {
      setLoading("");
    }
  };

  return {
    setUserName,
    setEmail,
    setPassword,
    setPassworConfirm,
    register,
    error,
    loading,
  };
};
