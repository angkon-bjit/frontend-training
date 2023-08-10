const dummyArray = [2, 4, 6, 7, 8];
// const reversedArray = dummyArray.reverse();

const dummyArrayOfObjects = [
  {
    color: "red",
    count: 12,
  },
  {
    color: "blue",
    count: 33,
  },
  {
    color: "purple",
    count: 20,
  },
];

const mappedArray = dummyArray.map((x, i) => {
  const multiplication = i == 2 ? x * 3 : x;
  //   console.log("index: ", i);

  return multiplication;
});

const mappedObject = dummyArrayOfObjects.map((obj) => {
  obj.count += 10;

  return obj;
});

console.log("Our mapped object array: ", mappedObject);
