import React from "react";

const CustomButton = ({ customClick }) => {
  return (
    <div>
      Button from child
      <button onClick={() => customClick("Text from child btn")}>
        click to pass data
      </button>
    </div>
  );
};

export default CustomButton;
