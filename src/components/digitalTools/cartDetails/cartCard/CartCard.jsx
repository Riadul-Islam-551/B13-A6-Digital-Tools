import React from "react";
import { toast } from "react-toastify";

const CartCard = ({ cart, cartProducts, setCartProducts }) => {
  console.log(cartProducts);
  const { name, icon, price } = cart;

  const removeFromCart = (id) => {
    const remainCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(remainCart);
    toast("Remove the cart successfully")
  };

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
      <button
        onClick={() => removeFromCart(cart.id)}
        className="text-pink-500 font-medium text-sm hover:text-pink-600 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;
