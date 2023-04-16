import React from "react";
import StyleSheet from "react-native";

function App() {
  const hostname = `${window.location.hostname}`;
  console.log(hostname);
  return (
    <div className="container">
      <ul style={styles.text}>1</ul>
    </div>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'brown'
  }
})

export default App;
