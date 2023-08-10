let ourPromise = new Promise((resolve, reject) => {
  const x = 3;

  if (x == 2) {
    resolve();
  } else {
    reject("It didnt worked, try again");
  }
})
  .then(() => {
    console.log("It worked");
  })
  .then(() => {
    console.log(
      "As it worked, we can move to another function or implementation"
    );
  })
  .catch((err) => {
    console.log("The error message: ", err);
  })
  .finally(() => {
    console.log("It always works");
  });
