import React from "react";
import CartCard from "./cartCard/CartCard";

const CartDetails = ({ cartProducts, setCartProducts }) => {
  // console.log(cartProducts);
  let totalPay = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    totalPay = totalPay + cartProducts[i].price;
    // console.log(totalPay);
  }

  const emptyCart = () => {
    setCartProducts([]);
  };

  return (
    <div>
      {cartProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          {/* Icon */}
          <div className="bg-gray-100 p-6 rounded-full mb-6 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13l1.5 6M17 21a1 1 0 100-2 1 1 0 000 2zM9 21a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your Cart is Empty
          </h2>

          {/* Description */}
          <p className="text-secondary text-center max-w-md mb-6">
            Looks like you haven't added anything to your cart yet. Please go to
            the product section to exploring our premium tools and find
            something you love.
          </p>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto border  border-gray-300 rounded-3xl p-9 my-9">
          <h1 className="text-start font-bold text-2xl  mb-3 ">Your Cart</h1>
          {cartProducts.map((cart) => (
            <CartCard
              cart={cart}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            ></CartCard>
          ))}
          <div className="flex items-center px-2">
            <p className="">Total:</p>

            <p className="text-end font-bold text-xl w-full ">
              $ <span>{totalPay}</span>
            </p>
          </div>
          <button onClick={emptyCart} className="button-primary w-full mt-9">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
