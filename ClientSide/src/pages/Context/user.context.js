import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import {  getUser } from '../../API/api.js';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  const value = { user };
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};
