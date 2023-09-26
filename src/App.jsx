import { useState } from "react";
import "./App.scss";
import CustomButton from "./components/buttonComponent";
import ChildComponent1 from "./components/child1.component";
import ChildrenDemo from "./components/children.component";
import FormSubmission from "./components/formSubmission.component";
import EventPropagation from "./components/eventPropagation.component";

function App() {
  const [title, setTitle] = useState("Title from app.jsx");

  const handleClick = (textFromChild) => {
    console.log("Btn clicked");
    setTitle(textFromChild);
  };

  return (
    <>
      <FormSubmission />

      <EventPropagation />

      <h1>Title will be changed by callback: {title}</h1>
      <CustomButton customClick={handleClick} />
      <br></br>
      <br></br>
      <br></br>

      <h1>Props Drilling:</h1>
      <ChildComponent1 childTitle="Text from App.jsx" childTitle2="Title 2" />

      <div>
        <h1>Passing children demo</h1>
        <ChildrenDemo title="Title from app">
          <CustomButton customClick={handleClick} />
          <p>This is children description</p>
          <p>This is children description 2</p>
          <h4>Some title</h4>
        </ChildrenDemo>

        <ChildrenDemo />
      </div>

      {/* <h3>Title: {title}</h3> */}
    </>
  );
}

export default App;
