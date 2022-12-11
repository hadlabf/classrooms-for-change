import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import { useRoutes } from "./routes";
import { ThemeProvider } from "styled-components";
import { ThemeConfig } from "./config/theme.config";
import { Footer } from "./components/Footer";
import { Box } from "@mui/system";

export const Font1 = "DM Sans, sans-serif";
export const Font2 = "Fira Sans Condensed, sans-serif";
export const Font3 = "Permanent Marker, cursive";

function App() {
  const theme = {
    colors: {
      black: "#1c1c1c",
      white: "#ffffff",
      yellow: "#F0D608",
      yellowHover: "#ffffff",
      grey: "#EDEDED",
      grey07: "rgba(255, 255, 255, 0.7)",
      grey08: "rgba(255, 255, 255, 0.8)",
    },
    spacer: 8,
    font: {
      family: "Fira Sans Condensed, sans-serif",
      familySecondary: "Permanent Marker, cursive",
      weight: {
        normal: 400,
        boldSlim: 500,
        bold: 700,
      },
    },
    borderRadius: {
      small: "6px",
      medium: "12px",
      large: "15px",
    },
  };

  return (
    <ThemeConfig>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Box sx={{ overflowX: "clip" }}>
            <Routes>
              {useRoutes().map((route) => (
                <Route key={route.path} path={route.path} element={route.node} />
              ))}
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ThemeProvider>
    </ThemeConfig>
  );
}

export default App;
