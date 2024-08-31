import React, { createContext, useContext, useReducer } from "react";

const initial = {
  value: "",
};
const reducer = (state, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

const AppProvider = createContext(initial);
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);
  
  return (
    <AppProvider.Provider value={{ state, dispatch }}>
      {children}
    </AppProvider.Provider>
  );
};
export const useApp = ()=> useContext(AppProvider)

export default AppContext;
