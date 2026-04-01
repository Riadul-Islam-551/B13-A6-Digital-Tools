import React from "react";
import CartCard from "./cartCard/CartCard";

const CartDetails = ({ cartProducts }) => {
  // console.log(cartProducts.length);
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
        <div className="max-w-3xl mx-auto ">
          <p className="text-start font-bold text-2xl mt-9 mb-3 ">Your Cart</p>
          {cartProducts.map((cart) => (
            <CartCard cart={cart}></CartCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartDetails;
