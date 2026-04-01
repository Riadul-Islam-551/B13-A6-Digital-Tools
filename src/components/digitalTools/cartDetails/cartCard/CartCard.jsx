import React from "react";

const CartCard = ({ cart }) => {
  console.log(cart);
  const { name, icon, price } = cart;
  return (
    <div className="w-full bg-gray-100 rounded-xl my-3 p-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <img src={icon} alt="" />

        {/* Text */}
        <div>
          <h2 className="font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500 text-sm text-start">$ {price}</p>
        </div>
      </div>

      {/* Right Section */}
      <button className="text-pink-500 font-medium text-sm hover:text-pink-600 transition">
        Remove
      </button>
    </div>
  );
};

export default CartCard;
