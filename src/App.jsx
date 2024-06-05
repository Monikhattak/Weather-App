import React from "react";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="app">
      <div className="stars"></div>
      <div className="rain"></div>
      <Weather />
    </div>
  );
}

export default App;
