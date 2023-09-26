import React from "react";

const ChildrenDemo = ({ title, children }) => {
  return (
    <div>
      <h1>ChildrenDemo: {title}</h1>
      {children && <div style={{ border: "1px solid" }}>{...children}</div>}
    </div>
  );
};

export default ChildrenDemo;
