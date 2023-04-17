import React from "react";
import './App.css';

function App() {
  const hostname = `${window.location.hostname}`;
  console.log(hostname);
  return (
    <div className="container">
      <div className="logo">
        <img src=""></img>
      </div>
      <h1 className="AppName">LaSistant</h1>
      <p className="text">Let's begin</p>
    </div>
  );
}

export default App;
