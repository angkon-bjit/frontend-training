import React from "react";

const BooksPage = () => {
  const check = localStorage.getItem("token");
  console.log("Authenticating", check);

  return (
    <div>
      BooksPage
      {check && <h1>Books list</h1>}
      {!check && <h1>You are not authorized</h1>}
    </div>
  );
};

export default BooksPage;
