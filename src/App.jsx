import Header from "./components/header.component";
import "./App.scss";
import MyName from "./components/myName";
import PureComponent from "./components/pureComponent";
import HigherOrderComponent from "./components/higherOrderComponent";
import WithTooltip from "./components/higherOrderComponent";
import CardComponent from "./components/card";
import { useState } from "react";

function App() {
  const cardData = [
    {
      id: 1,
      title: "Title 1",
      description: "Some description",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/17/25/45/240_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg",
    },
    {
      id: 1,
      title: "Title 2",
      description: "Some description",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/01/22/45/42/1000_F_122454272_3uT1sZUrm0qpOmRYcnnkc8bbbgMTkmFe.jpg",
    },
    {
      id: 1,
      title: "Title 3",
      description: "Some description",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/17/25/45/240_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg",
    },
  ];

  const testObject = {
    count: 10,
    text: "test ",
    data: cardData,
  };

  const [countValue, setCountValue] = useState(0);
  const [ourText, setOurText] = useState("Our initial text");
  const [arrayOfObjects, setArrayOfObjects] = useState(cardData);

  const [testState, setTestState] = useState(testObject);

  return (
    <>
      <div>
        <h5>Onclick action with React UseState hook</h5>
        <button
          onClick={() => {
            setTestState({
              ...testState,
              count: testState.count + 10,
              text: "John",
            });
          }}
        >
          Click me test
        </button>
        <h1>test Count: {testState.count}</h1>
      </div>

      {/* useState() hook with only one value */}
      <div>
        <button
          onClick={() => {
            const changedValue = countValue + 10;
            setCountValue((countValue) => countValue + 10);
            console.log(
              "Onclick count value ",
              changedValue,
              " Our real countValue ",
              countValue
            );
            // do calculation with this changed value
          }}
        >
          Click me
        </button>
        <h1>Count: {countValue}</h1>
      </div>
      {/* changing text using useState() */}
      <div>
        <button onClick={() => setOurText("Our changed text")}>
          Change text
        </button>
        <h1>Text is: {ourText}</h1>
      </div>
      {/* using reusable card component */}
      <div>
        <h1>Our Card component demonstration</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {arrayOfObjects.length > 0 &&
            arrayOfObjects.map((card, i) => {
              return (
                <div key={card.id}>
                  <CardComponent
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                  />
                </div>
              );
            })}
        </div>
      </div>
      {/* <div>single card demonstration</div>
      <CardComponent
        title="Our single card"
        description="Card description"
        imageUrl="https://as1.ftcdn.net/v2/jpg/01/22/45/42/1000_F_122454272_3uT1sZUrm0qpOmRYcnnkc8bbbgMTkmFe.jpg"
      /> */}
    </>
  );
}

export default App;
