import React from "react";
import ChildC from "./childC.component";

const ChildB = () => {
  return (
    <div>
      From ChildB
      <ChildC />
    </div>
  );
};

export default ChildB;
