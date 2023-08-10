const ourArray = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const filteredArray = ourArray.filter((x) => {
  if (x.length > 6) {
    return x;
  }
});

console.log("Our filtered array : ", filteredArray);
