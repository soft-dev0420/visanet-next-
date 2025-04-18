import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setToken(storedUser)
      setUser(jwtDecode(storedUser));
    }
  }, []);

  const login = async (userData) => {
    await localStorage.setItem('user', userData);
    setToken(userData)
    setUser(jwtDecode(userData));
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};