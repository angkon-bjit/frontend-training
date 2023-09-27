import React, { createContext, useState } from "react";
import ChildA from "../components/childA.component";

export const MyContextVariables = createContext();

const ContextApiDemo = () => {
  const [title, setTitle] = useState("Initial title");

  const onClick = (text) => {
    console.log("The click event happened");
    setTitle(text);
  };
  return (
    <>
      <div>
        <h1>context api demo</h1>
        <h2>From ContextApiDemo Title: {title}</h2>
        <MyContextVariables.Provider value={{ title, onClick }}>
          <ChildA />
        </MyContextVariables.Provider>
      </div>
    </>
  );
};

export default ContextApiDemo;
