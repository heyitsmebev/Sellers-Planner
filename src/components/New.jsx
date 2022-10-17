import React, { useState } from "react";
import Calc from "./Calc";

const App = () => {
  const [count, setCount] = useState(null);
  const [count2, setCount2] = useState(null);

  const handleaddNumber = (e) => {
    setCount(e.target.value);
    console.log(count);
  };

  const handleaddNumber2 = (e) => {
    setCount2(e.target.value);
    console.log(count2);
  };

  return (
    <div className="App">
      <h2>add numbers</h2>
      <input
        onChange={(e) => handleaddNumber(e)}
        value={count ? count : ""}
        type="number"
      />
      <input
        onChange={(e) => handleaddNumber2(e)}
        value={count2 ? count2 : ""}
        type="number"
      />
      <Calc values={count ? count : ""} values2={count2 ? count2 : ""} />
    </div>
  );
};

export default App;
