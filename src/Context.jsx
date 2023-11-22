
import React, { createContext, useState } from 'react';
  
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
const tokenFromLocalStorage = JSON.parse(localStorage.getItem('User')) || null;
const [ userToken, setUserToken ] = useState(tokenFromLocalStorage);
const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider value={ { userToken, setUserToken, username, setUsername } }>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
