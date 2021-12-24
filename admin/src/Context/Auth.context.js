import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = props => {

  const [token, setToken] = useState('');
  let value = (localStorage.getItem('refreshCycle'))?localStorage.getItem('refreshCycle'):false
  const [isAuthenticated, setIsAuthenticated] = useState(value);

  {/* Verify if token is present or not */}
  useEffect(() => {
    if (token) {
      verifyToken(token)
    } else {
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        verifyToken(localStorage.getItem('token'))
      } else {
        setIsAuthenticated(false)
      }
    }
  }, [isAuthenticated])

  {/* Used to set token */}
  const activateToken = (value) => {
    setToken(value);
    return;
  }

  {/* Used to set authentication */}
  const activateAuthentication = (value) => {
    setIsAuthenticated(value);
    return;
  }

  {/* Function to verify if token is valid or not */}
  const verifyToken = async (token) => {
    let result = await Axios.get(`${process.env.REACT_APP_API_URL}admin/verify-token`, {headers: {'x-access-token': token}})
    setIsAuthenticated(result.data)
    localStorage.setItem('refreshCycle', result.data)
  }

  const authContextValue = {
    activateToken,
    activateAuthentication,
    isAuthenticated
  };
  return <AuthContext.Provider value={authContextValue} {...props}/>;
};

const Auth = () => React.useContext(AuthContext);

export { AuthProvider, Auth };
