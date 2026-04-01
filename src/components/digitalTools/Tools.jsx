import React, { Suspense, useState } from "react";
import Products from "./product/Products";
import CartDetails from "./cartDetails/CartDetails";
const Tools = ({ fetchProducts, cartProducts, setCartProducts }) => {
  // toggoling the product button and cart button 
  const [productStage, setProductStage] = useState("showProducts");
  console.log(productStage);


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
            onClick={() => setProductStage("showProducts")}
            className={`${productStage === "showProducts" ? "button-primary" : "button-secondary"}`}
          >
            Products
          </button>
          <button
            onClick={() => setProductStage("showCart")}
            className={`${productStage === "showCart" ? "button-primary" : "button-secondary"}`}
          >
            Cart <span>({cartProducts.length})</span>
          </button>
        </div>
        {/* showing the products  */}
        <Suspense fallback={<p>Loading</p>}>
          {productStage === "showProducts" && (
            <Products cartProducts={cartProducts} setCartProducts={setCartProducts} fetchProducts={fetchProducts}></Products>
          )}
          {productStage === "showCart" && <CartDetails></CartDetails>}
        </Suspense>
      </div>
    </div>
  );
};

export default Tools;
