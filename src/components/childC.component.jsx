import React, { useContext } from "react";
import { MyContextVariables } from "../pages/contextApiDemo.page";

const ChildC = () => {
  const { title, onClick } = useContext(MyContextVariables);

  return (
    <div>
      From ChildC
      <h2>Title from childC: {title}</h2>
      <button onClick={() => onClick("Changed from childC")}>
        click to change title
      </button>
    </div>
  );
};

export default ChildC;
