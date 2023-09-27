import React from "react";
import ChildB from "./childB.component";

const ChildA = () => {
  return (
    <div>
      From ChildA
      <ChildB />
    </div>
  );
};

export default ChildA;
