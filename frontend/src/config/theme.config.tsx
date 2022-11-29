import React from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

type ThemeProp = {
  children: JSX.Element;
};

export enum ThemePalette {
  Primary = "#F0D608",
  Black = "#1c1c1c",
  White = "#ffffff",
  Grey = "#EDEDED",
  GreyOPA1 = "rgba(255, 255, 255, 0.7)",
}

const theme = createTheme({
  palette: {
    background: {
      default: ThemePalette.Primary,
    },
    primary: {
      main: ThemePalette.Black,
    },
    secondary: {
      main: ThemePalette.White,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 900,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: "Fira Sans Condensed, sans-serif",
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
