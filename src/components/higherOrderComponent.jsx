import React from "react";

const WithTooltip = ({ WrappedComponent, tooltipText }) => {
  return (props) => (
    <div className="tooltip-wrapper">
      <WrappedComponent />
      <div className="tooltip">{tooltipText}</div>
    </div>
  );
};

export default WithTooltip;
