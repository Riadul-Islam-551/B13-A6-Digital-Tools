import React from "react";
import { TiTick } from "react-icons/ti";

const PackagePrice = () => {
  return (
    <div className="px-2 md:px-4 lg:px-9 py-6 md:py-9 lg:py-12 mb-9">
      <div className="text-center  max-w-300 rounded-2xl  mx-auto px-3 ">
        <h1 className="text-2xl md:text-4xl font-bold my-3">
          Simple, Transparent Pricing{" "}
        </h1>
        <p className="text-secondary text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade
          anytime.{" "}
        </p>
        {/* pricing card  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-9">
          {/* card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 text-start">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">Starter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Perfect for getting started
            </p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">$0</span>
              <span className="text-gray-400 text-sm">/Month</span>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Access to 1 free tools
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Basic templates
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Community support
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                1 project per month
              </li>
            </ul>

            {/* Button */}
            <button className="w-full button-primary">Get Started Free</button>
          </div>
          {/* card 2 */}
          <div className="relative text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl shadow-md p-6 border border-gray-200 text-start">
            <p className="absolute -top-4 left-1/2 -translate-x-1/2 py-2 px-3 text-yellow-600 bg-amber-100 w-fit rounded-full text-sm">
              Most popular
            </p>
            {/* Title */}
            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="text-sm text-gray-300 mb-4">Best for professionals</p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold ">$29</span>
              <span className="text-gray-300 text-sm">/Month</span>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Access to all premium tools{" "}
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Unlimited templates{" "}
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Priority support{" "}
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Unlimited projects
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Cloud sync
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Advanced analytics
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Start Pro Trial
              </li>
            </ul>

            {/* Button */}
            <button className="w-full button-secondary">Start Pro Trial</button>
          </div>
          {/* card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 text-start">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">Enterprise</h3>
            <p className="text-sm text-gray-500 mb-4">
              For teams and businesses{" "}
            </p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">$99</span>
              <span className="text-gray-400 text-sm">/Month</span>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Everything in Pro
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Team collaboration
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Custom integrations
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Dedicated support
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                SLA guarantee
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Custom branding
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <span className="text-green-500 mr-2">
                  <TiTick />
                </span>
                Start Pro Trial
              </li>
            </ul>

            {/* Button */}
            <button className="w-full button-primary">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagePrice;
