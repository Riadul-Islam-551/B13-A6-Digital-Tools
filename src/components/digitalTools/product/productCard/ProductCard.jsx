import React from "react";

const ProductCard = ({ product, cartProducts, setCartProducts }) => {
  const { name, description, price, period, tagType, features, icon } = product;

  // set the button disabled function
  // const [isDisabled, setIsDisabled] = useState(false);

  // set the product to the cart section
  const addToCart = (product) => {
    const existProduct = cartProducts.find((item) => item.id === product.id);

    if (!existProduct) {
      setCartProducts([...cartProducts, product]);
      alert("add the product successfully");
    } else {
      alert("the product has already added...... Go to the Cart");
    }

    // setIsDisabled(true);
  };
  // console.log(isDisabled);

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        <div className="flex justify-between items-start">
          <img
            className="border border-gray-200 p-3 rounded-full"
            src={icon}
            alt=""
          />{" "}
          {/* tag type  */}
          <span
            className={`text-sm capitalize py-1 px-3 rounded-full ${tagType === "new" ? "text-green-600 bg-green-100" : ""} ${tagType === "popular" ? "text-blue-600 bg-blue-100" : ""} ${tagType === "best" ? "text-yellow-600 bg-yellow-100" : ""}`}
          >
            {tagType}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4">{description}</p>

        {/* Price */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ${price}
          <span className="text-gray-400 text-base font-medium">/{period}</span>
        </h3>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, ind) => {
            return (
              <li key={ind} className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">✔</span>
                {feature}
              </li>
            );
          })}
        </ul>

        {/* Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full button-primary"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
