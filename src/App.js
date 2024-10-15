import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1>Enter the word in the box below</h1>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <hr />
          <small>Coded by Stella Bullo</small>
        </footer>
      </div>
    </div>
  );
}
