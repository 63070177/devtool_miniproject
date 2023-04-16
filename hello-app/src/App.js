import React from "react";
import styles from './App.css';

function App() {
  const hostname = `${window.location.hostname}`;
  console.log(hostname);
  return (
    <div className="container">
      <ul style={styles.text}>1</ul>
    </div>
  );
}

export default App;
