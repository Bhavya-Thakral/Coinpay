import React, {createContext, useState, useContext, useMemo} from 'react';

const AppContext = createContext();

export const useFinTech = () => {
  return useContext(AppContext);
};

export const AppProvider = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState();

  const value = useMemo(
    () => ({
      currentTheme,
      setCurrentTheme,
    }),
    [currentTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
