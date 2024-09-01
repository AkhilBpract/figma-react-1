import React, { createContext, useContext, useReducer, useState } from "react";
import { DARK, LIGHT } from "./type";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const state = {
  themeMode: "dark",
  isDark: true,
};

const reducer = (state, { type }) => {
  switch (type) {
    case DARK:
      return {
        ...state,
        themeMode: "dark",
      };
    case LIGHT:
      return {
        ...state,
        themeMode: "light",
      };
    default:
      return state;
  }
};
const CustomThemeProvider = createContext(null);
const ThemeContext = ({ children }) => {
  // const [settings, dispatch] = useReducer(reducer, state);
  const [settings, setSettings] = useState(state);
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
      isDark: settings.isDark ? false : true,
    });
  };
  const palette = {
    light: {
      mode: "light",
      text: {
        primary: "#000",
      },
      background: {
        paper: "#fff",
        default: "#fff",
        main: "#f7f7f7",
      },
    },
    dark: {
      mode: "dark",
      text: { primary: "#fff" },
      background: {
        paper: "#000",
        default: "#000",
        main: "#252421",
      },
    },
  };
  // F0B64F

  const darkTheme = createTheme({
    palette: settings.themeMode === "light" ? palette.light : palette.dark,
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "30px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Global box-shadow for all cards
            padding: "16px",
            "&:hover": {
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
            },
          },
        },
      },
    },
  });
  return (
    <CustomThemeProvider.Provider value={{ settings, onToggleMode }}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </CustomThemeProvider.Provider>
  );
};

export default ThemeContext;
export const useSettings = () => useContext(CustomThemeProvider);
