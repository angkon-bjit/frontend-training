import React from "react";
import { useOutletContext } from "react-router-dom";

const Contact = () => {
  const [{ currentCity }, setCurrentCity] = useOutletContext();

  const Change = () => setCurrentCity({ name: "London", country: "England" });
  return (
    <div>
      <h1>This is contact page</h1>
      <h1>Contact us here {currentCity.country} </h1>
      <button onClick={Change}>Change</button>
    </div>
  );
};

export default Contact;
