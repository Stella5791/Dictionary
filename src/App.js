import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          
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
