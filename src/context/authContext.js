import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
  }, [token, user]);

  const logoutToken = () => {
    setToken("");
    setUser("");
  };

  const loginToken = (token, user) => {
    setToken(token);
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ token, user, logoutToken, loginToken }}>
      {children}
    </AuthContext.Provider>
  );
};
