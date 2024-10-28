import React from "react";
import "./index";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Dictionary defaultKeyword="summer" />
        </header>
        <footer className="App-footer">
          <small>Coded by Stella Bullo</small>
        </footer>
      </div>
    </div>
  );
}
