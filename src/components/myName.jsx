const MyName = ({ firstName, person }) => {
  // const firstName = "Angkon";
  // const lastName = "Roy";
  // const colorName = "red";

  // const person = {
  //   name: "Angkon",
  //   styling: {
  //     backgroundColor: "blue",
  //     color: "white",
  //   },
  // };

  const ourClassName = "my-div-text";

  console.log("Our color property ", person.styling.color);

  return (
    <div
      className={`my-div ${ourClassName}`}
      style={{
        backgroundColor: person.styling.backgroundColor,
        color: person.styling.color,
      }}
    >
      <h1>
        MyName is Showing here: {person.name} {person.lastName}
      </h1>
    </div>
  );
};

export default MyName;
