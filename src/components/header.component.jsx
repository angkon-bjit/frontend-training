import React from "react";
import { Link } from "react-router-dom";

const CustomHeader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>Logo</div>

      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/products">Products</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/user/create">Create User</Link>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
