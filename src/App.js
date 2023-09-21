import "./App.css";
import React from "react";
import PrductsList from "./components/PrductsList";
function App() {
  return (
    <div>
      <div className="main">
        <h1>WELCOME TO THE JUNGLE</h1>
        <div>
          <PrductsList />
        </div>
      </div>
    </div>
  );
}

export default App;
