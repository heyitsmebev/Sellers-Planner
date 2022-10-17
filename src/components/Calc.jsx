import React, { useState } from "react";

const Calc = (props) => {
  const [value, setValue] = useState(0);

  const addNum = (val, val2, val3, val4) => {
    let a = parseInt(val);
    let b = parseInt(val2);
    let c = parseInt(val3);
    let salesprice = parseInt(val4);
    let expense = a + b + c;
    setValue(salesprice - expense);
  };

  return (
    <div className="App">
      <button onClick={() => addNum(props.productcost, props.shippingcost, props.packagingcost, props.salesprice)} class="inline-block bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mt-10 mb-10 ">
        Result
      </button>
      <p>{value > 0 ? value : ""}</p>
    </div>
  );
};

export default Calc;