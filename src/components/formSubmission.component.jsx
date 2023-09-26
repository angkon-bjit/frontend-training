import React from "react";

const FormSubmission = () => {
  return (
    <div>
      <h1>Prevent default behave of form submission</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitting!");
        }}
      >
        <input />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FormSubmission;
