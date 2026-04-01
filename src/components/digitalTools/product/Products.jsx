import React, { use } from "react";
import ProductCard from "./productCard/ProductCard";

const Products = ({ fetchProducts ,cartProducts, setCartProducts }) => {
  const products = use(fetchProducts);
  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-9 px-9 my-9
        "
      >
        {products.map((product, ind) => (
          <ProductCard key={ind} product={product} cartProducts={cartProducts} setCartProducts={setCartProducts} ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
