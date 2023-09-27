import { useEffect, useState } from "react";

const UseEffectHookDemo = () => {
  const [count, setCount] = useState(0);
  const [multiplication, setMultiplication] = useState(1);
  const [title, setTitle] = useState("Initial Title");

  useEffect(() => {
    console.log("UseEffect triggered and countval: ", count);
    if (count > 5) {
      setTitle("greater than 5");
    }
  }, [count]);

  useEffect(() => {
    console.log("UseEffect triggred and Multiplication: ", multiplication);
    if (multiplication > 10) {
      setTitle("Multiplication to 10");
    }
  }, []);
  return (
    <div>
      <h1>useEffect Demo</h1>
      <h4>Count Value: {count}</h4>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>

      <h4>Multiplication Value: {multiplication}</h4>
      <button onClick={() => setMultiplication((multi) => multi * 2)}>
        Click to Multiply
      </button>
      <h2>{title}</h2>
    </div>
  );
};

export default UseEffectHookDemo;
