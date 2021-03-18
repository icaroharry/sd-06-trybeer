import React, { useState } from 'react';
import propTypes from 'prop-types';
import UserContext from './UseContext';


const Provider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loginRequest, setLoginRequest] = useState('');
  const [totalPrice, setTotalPrice] = useState("0.0");
  const [totalPurchase, setTotaPurchase] = useState([]);

  const contextValue = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loginRequest,
    setLoginRequest,
    totalPrice,
    setTotalPrice,
  };

  return (
    <UserContext.Provider value={ contextValue }>
      { children }
    </UserContext.Provider>
  );
};

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
