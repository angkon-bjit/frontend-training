import React from "react";

const EventPropagation = () => {
  return (
    <div>
      <h1>Event Propagation</h1>
      <div
        onClick={() => {
          alert("Click from Div 2");
        }}
      >
        <h2>This text is from div 2</h2>

        <div
          onClick={() => {
            // e.stopPropagation();
            alert("Click from Div 1");
          }}
        >
          <h2>This text is from div 1</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("Click from button");
            }}
          >
            Click
          </button>

          <button
            onClick={(e) => {
              // e.stopPropagation();
              alert("Click from button2");
            }}
          >
            Click2
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPropagation;
