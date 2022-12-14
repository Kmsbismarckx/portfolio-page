import "./styles/App.scss";
import React, { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
