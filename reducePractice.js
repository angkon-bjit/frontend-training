const dummyArray = [2, 4, 6, 7, 8];
const dummyCharArray = ["a", "b", "c"];

const reducedValue = dummyCharArray.reduce((totalValue, currentValue) => {
  const calculateMult = totalValue + currentValue;
  return calculateMult;
});

console.log("Our reducedValue will be ", reducedValue);
