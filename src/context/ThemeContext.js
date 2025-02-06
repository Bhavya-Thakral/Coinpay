import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { GlobalColors } from '../constants/Colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? GlobalColors.dark : GlobalColors.light;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
