async function getProductData() {
  const response = await fetch("https://dummyjson.com/products");
  //   const jsonData = response.json();
  console.log("Our response is : ", response);
}

getProductData();
