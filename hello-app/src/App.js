import React from "react";
import "./App.css";
import logo from './logo.png';

function App() {
  const hostname = `${window.location.hostname}`;
  console.log(hostname);
  return (
    <div>
      <div className="logo">
          <img src={logo}></img>
        </div>
      <div>
        <h1 className="AppName">LaSistant</h1>
        <p className="text">Let's begin</p>
      </div>
    </div>
  );
}

export default App;
