import React from "react";
import styles from './App.css';

function App() {
  const hostname = `${window.location.hostname}`;
  console.log(hostname);
  return (
    <div className="container">
      <h1>LaSistant</h1>
      <p>Let's begin</p>
    </div>
  );
}

export default App;
