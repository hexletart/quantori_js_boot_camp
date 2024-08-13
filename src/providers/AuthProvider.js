import React, { useState } from 'react';

import AuthContext from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('userId'));

  const login = (token, username) => {
    localStorage.setItem('userId', token);
    localStorage.setItem('username', username);
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    setLoggedIn(false);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ login, logout, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
