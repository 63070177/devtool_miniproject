import React from "react";
import styles from './App.css';

function App() {
  const hostname = `${window.location.hostname}`;
  console.log(hostname);
  return (
    <div className="container">
      <h1 className="text">LaSistant</h1>
      <p className="text">Let's begin</p>
    </div>
  );
}

export default App;
