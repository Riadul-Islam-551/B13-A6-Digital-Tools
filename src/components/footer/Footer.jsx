import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-gray-300 py-12">
      <div className="max-w-300 mx-auto border-b border-b-gray-700 grid grid-cols-1 md:grid-col-3 lg:grid-cols-6 gap-5 px-3  py-7 md:py-16">
        <div className="lg:col-span-2">
          <h1 className="text-2xl md:text-4xl text-white mb-3">Digitools</h1>
          <p className="text-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h2 className="text-white text-xl">Product</h2>
          <ul className="text-sm mt-3 space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-xl">Resources</h2>
          <ul className="text-sm mt-3 space-y-2">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-xl">Company</h2>
          <ul className="text-sm mt-3 space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-xl">Social Links</h2>
          <ul className="text-sm mt-3 space-y-2 flex gap-4">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaXTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-300 mx-auto flex flex-col md:flex-row justify-between lg:justify-between mt-9 p-4 text-gray-400 text-sm">
        <p>&copy; 2026 Digitools. All rights reserved.</p>
        <ul className="flex items-center gap-4 mt-5 md:mt-0">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
