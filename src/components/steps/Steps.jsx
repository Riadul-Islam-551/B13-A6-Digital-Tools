import React from "react";
import user from "../../assets/user.png";
import chooseProduct from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div className="px-2 md:px-4 lg:px-9 py-6 md:py-9 lg:py-12 mb-9 bg-[#F9FAFC]">
      <div className="text-center  max-w-300 rounded-2xl  mx-auto ">
        <h1 className="text-2xl md:text-4xl font-bold my-3">
          Get Started in 3 Steps
        </h1>
        <p className="text-secondary text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
        {/* steps card  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 lg:mt-12">
          {/* card 1 */}
          <div className="relative bg-white rounded-2xl p-8 text-center border border-gray-200">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              01
            </div>

            {/* Icon Circle */}
            <div className="flex items-center justify-center mt-6 mb-4">
              <img
                className="p-3 rounded-full bg-violet-100"
                src={user}
                alt=""
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Create Account
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          {/* card 2 */}
          <div className="relative bg-white rounded-2xl p-8 text-center border border-gray-200">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              02
            </div>

            {/* Icon Circle */}
            <div className="flex items-center justify-center mt-6 mb-4">
              <img
                className="p-3 rounded-full bg-violet-100"
                src={chooseProduct}
                alt=""
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Choose Products{" "}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          {/* card 3  */}
          <div className="relative bg-white rounded-2xl p-8 text-center border border-gray-200">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              03
            </div>

            {/* Icon Circle */}
            <div className="flex items-center justify-center mt-6 mb-4">
              <img
                className="p-3 rounded-full bg-violet-100"
                src={rocket}
                alt=""
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Start Creating{" "}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
