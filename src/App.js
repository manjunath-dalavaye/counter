import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Increment the count
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    // Decrement the count
    setCount((prevCount) => prevCount - 1);
  };

  // CSS styling
  const main = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const container = {
    border: "2px solid #ccc", // Add a solid border
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={main}>
      <div style={container}>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterApp;
