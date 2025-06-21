// hooks/useAuth.ts
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedUser");
    if (savedUser) setUser(savedUser);
  }, []);

  const login = (username: string) => {
    localStorage.setItem("loggedUser", username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return { user, login, logout };
};
