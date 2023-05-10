import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    localStorage.setItem("userId", userId);
  }, [token, user, userId]);

  const logoutToken = () => {
    setToken("");
    setUser("");
    setUserId("");
  };

  const loginToken = (token, user, userId) => {
    setToken(token);
    setUser(user);
    setUserId(userId);
  };

  return (
    <AuthContext.Provider value={{ token, user, userId, logoutToken, loginToken }}>
      {children}
    </AuthContext.Provider>
  );
};
