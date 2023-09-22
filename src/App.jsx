import Header from "./components/header.component";
import "./App.scss";
import MyName from "./components/myName";

function App() {
  console.log("Rendering from App.jsx file");

  const person = {
    name: "Angkon",
    lastName: "Roy",
    styling: {
      backgroundColor: "blue",
      color: "white",
    },
  };

  const person2 = {
    name: "John",
    styling: {
      backgroundColor: "green",
      // color: "yellow",
    },
  };

  const anotherString = "another string here";

  const headerFlag = true;

  if (headerFlag == false) {
    return <h1>Hey, there is no contents to show</h1>;
  }

  // const showLists = false;

  const listArray = [
    { id: 1, name: "list 1" },
    { id: 2, name: "list 2" },
    { id: 3, name: "list 3" },
  ];

  return (
    <>
      <div>
        {headerFlag == true && <Header />}
        <p>This is from app</p>
        <MyName firstName="Angkon from App.jsx" person={person} />
        <MyName firstName="John" person={person2} />
        <h1>this is one method of conditional rendering</h1>
        {listArray.length > 0 &&
          listArray.map((list) => {
            const customName = " custom name from map";

            return (
              <div key={list.id}>
                {list.name} <p>{customName}</p>
              </div>
            );
          })}
        <h1>this is another method of conditional rendering</h1>
        {listArray.length > 0 ? (
          listArray.map((list) => {
            const customName = " custom name from map";

            return (
              <div key={list.id}>
                {list.name} <p>{customName}</p>
              </div>
            );
          })
        ) : (
          <h1>There is no list to show</h1>
        )}
      </div>
    </>
  );
}

export default App;
