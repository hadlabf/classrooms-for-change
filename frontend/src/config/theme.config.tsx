import React from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

export const Size = {
  xs: 0,
  sm: 600,
  md: 800,
  lg: 900,
  xl: 1024,
};
export const Device = {
  xs: `(min-width: ${Size.xs})`,
  sm: `(min-width: ${Size.sm})`,
  lg: `(min-width: ${Size.lg})`,
};

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
      xs: Size.xs,
      sm: Size.sm,
      md: Size.md,
      lg: Size.lg,
      xl: Size.xl,
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
