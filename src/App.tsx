import React from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="app container">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
