import React from "react";
// import { Carousel } from 'antd'
// import pic from '../../images/roadmap2.png'
const RoadMapCarousel = ({ url }) => {
  return (
    <div className="w-80 md:w-fit border bg-white/30 md:flex lg:h-96 lg:w-[65%]">
      <div className="border md:text-center items-center flex md:w-[80px] justify-center">
          <p className="text-yelloww text-2xl md:-rotate-90 md:flex md:gap-4"><span>PHASE </span><span> 01</span></p>
      </div>

      <div className=" lg:w-80 lg:h-80 md:w-1/3 md:py-16 lg:py-10 lg:mx-10 md:h-full">
        <img src={url} alt=""  className="anm"/>
      </div>

      <div className="p-8 flex flex-col justify-center lg:pr-[10%] pr-[5%] md:p-2 md:w-2/3">
        <p className="text-white text-2xl ">Mini Game Launch For Community</p>
        <p className="text-yelloww text-xl font-semibold"> JUNE 23, 2023</p>
        <p className="text-white mt-2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam  wekdhwelkcje iwejfdlpwemc qkeudoqef
        </p>
        <button
          className="btn2 px-5 py-2 md:mr-[60%] relative border text-white bg-blue-800 border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black mt-4"
          type="button"
        >
          <span className="absolute inset-0  bg-yelloww"></span>
          <span className="absolute inset-0 flex justify-center items-center font-bold">
            READ MORE
          </span>
          READ MORE
        </button>
      </div>
    </div>

  );
};

export default RoadMapCarousel;
