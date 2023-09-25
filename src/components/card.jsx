import React from "react";

const CardComponent = ({ title, description, imageUrl }) => {
  return (
    <div style={{ border: "1px solid ", width: "400px" }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} style={{ width: "200px", height: "150px" }} />
    </div>
  );
};

export default CardComponent;
