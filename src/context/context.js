// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [state, setState] = useState('Initial State');

  // Function to update the state
  const updateState = (newState) => {
    setState(newState);
  };

  return (
    <MyContext.Provider value={{ state, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
