import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("#000000");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div className="color-picker">
        <input type="color" value={color} onChange={handleChange} />
        <div className="color-box" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default App;
