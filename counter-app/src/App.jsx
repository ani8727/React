import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div style={styles.container}>
      <h1>React Counter App</h1>
      <div style={styles.counter}>{count}</div>
      <div>
        <button onClick={increment} style={styles.incrementBtn}>Increment</button>
        <button onClick={decrement} style={styles.decrementBtn}>Decrement</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
  counter: {
    fontSize: "60px",
    margin: "20px",
    color: "#333",
  },
  incrementBtn: {
    padding: "10px 20px",
    fontSize: "18px",
    marginRight: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  decrementBtn: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default App;
