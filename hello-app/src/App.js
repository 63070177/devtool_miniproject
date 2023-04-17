import React from "react";
import "./App.css";
import logo from './logo.png';

function App() {
  const hostname = `${window.location.hostname}`;
  console.log(hostname);
  return (
    <div>
      <div className="tab">
          <img src={logo} className="logo"></img>
          <div className="mainmenu">
            <button><b>Home</b></button>
            <button><b>Log In</b></button>
            <button><b>Register</b></button>
          </div>
        </div>
      <div className="container">
        <h1 className="AppName">LaSistant</h1>
        <p className="text">Let's begin</p>
      </div>
    </div>
  );
}

export default App;
