import React, { use } from "react";
import ProductCard from "./productCard/ProductCard";

const Tools = ({ fetchProducts }) => {
  const products = use(fetchProducts);
  // console.log(products);

  // const [productState, setProductState] = useState("products");
  // const showProduct = (products) => {
  //   setProductState(products);
  //   console.log(productState);
  // };
  // const showCart = (cart) => {
  //   setProductState(cart);
  //   console.log(productState);
  // };
  return (
    <div>
      <div className="max-w-300 mx-auto text-center py-12 md:py-20 px-2">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 ">
          Premium Digital Tools
        </h1>
        <p className="text-secondary  text-sm md:text-md">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        {/* products buttons  */}
        <div className="mt-7 space-x-3">
          <button
            onClick={() => showProduct("products")}
            className="button-primary"
          >
            Products
          </button>
          <button onClick={() => showCart("cart")} className="button-secondary">
            Cart
          </button>
        </div>
        {/* showing the products  */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-9 px-9 my-9
        "
        >
          {products.map((product, ind) => (
            <ProductCard key={ind} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
