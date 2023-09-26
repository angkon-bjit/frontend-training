import React from "react";
import ChildComponent2 from "./child2.component";

const ChildComponent1 = ({ childTitle, childTitle2 }) => {
  return (
    <div>
      This is from child1: {childTitle2}
      <ChildComponent2 childText={childTitle} />
    </div>
  );
};

export default ChildComponent1;
