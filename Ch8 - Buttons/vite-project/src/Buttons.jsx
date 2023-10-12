import { useState } from "react";

const Buttons = ({value}) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleAdd()}>+1</button>
      <button onClick={() => handleSubtract()}>-1</button>
      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
};

export default Buttons;
