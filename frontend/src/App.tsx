import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <Layout className="App" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Header />
      <Home />
    </Layout>
  );
}

export default App;
