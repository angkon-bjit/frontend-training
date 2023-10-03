import React from "react";
import { useNavigate } from "react-router-dom";

const productsData = [
  {
    id: "123123",
    name: "Poduct 1",
  },
  {
    id: "22222",
    name: "Poduct 2",
  },
  {
    id: "33333",
    name: "Poduct 3",
  },
  {
    id: "44444",
    name: "Poduct 4",
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      ProductsPage
      <div>
        {productsData.map((product) => {
          return (
            <div key={product.id}>
              {product.name}
              <button onClick={() => navigate(`/products/${product.id}`)}>
                details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
