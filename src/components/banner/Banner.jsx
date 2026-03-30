import React from "react";
import group from "../../assets/Group.png";
import banner from "../../assets/banner.png";
import play from "../../assets/Play.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen  ">
      <div className="hero-content px-3 md:px-7  flex-col lg:flex-row-reverse  w-full max-w-300 mx-auto">
        <img src={banner} className="md:m-7 rounded-lg shadow-lg " />
        <div>
          <div className=" flex justify-start items-center gap-2 py-2 px-5 mt-9 rounded-full bg-indigo-100">
            <img src={group} alt="" />
            <h3 className="text-primary ">New: AI-Powered Tools Available</h3>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mt-4">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-xsm md:text-md  py-6 text-secondary">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="flex items-center gap-3">
            <button className="button-primary">Explore Products</button>
            <div className="button-secondary flex justify-center items-center w-fit">
              <img src={play} alt="" />
              <button className="ml-2">Watch Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
