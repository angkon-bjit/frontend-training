import React from "react";
import ChildComponent3 from "./child3.component";

const ChildComponent2 = ({ childText }) => {
  return (
    <div>
      This is from child2:
      <ChildComponent3 titleText={childText} />
    </div>
  );
};

export default ChildComponent2;
