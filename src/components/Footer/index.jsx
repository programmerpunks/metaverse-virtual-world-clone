import React from "react";
import DividerYellow from "../shared/DividerYellow";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark pt-5">
      <DividerYellow />
      <div className="font-black text-6xl text-white p-10 text-center">
        {" "}
        CONTACT US
      </div>

      <div className="flex w-full justify-center px-[5%] md:px-[10%] lg:px-[20%] ">
        <div className="flex w-full flex-wrap md:flex-nowrap">
          <div className="flex flex-col  p-4 w-full gap-7 ">
            <div className="">
              <p className="text-yelloww font-bold text-xl">Phone</p>
              <p className="text-white text-xl">+1 300 1234567</p>
            </div>
            <div>
              <p className="text-yelloww font-bold text-xl">EMAIL</p>
              <p className="text-white text-xl">ProgrammerPunks@gmail.com</p>
            </div>
          </div>

          <div className=" p-4 w-full">
            <p className="text-yelloww font-bold text-xl">OFFICE</p>
            <p className="text-white text-xl">
              124 S Main St, Scottville, MI 49454, United States
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap  md:flex-nowrap px-[5%] md:px-[10%] lg:px-[20%]">
        <div className="w-full md:w-1/2 p-4">
          <input
            type="text"
            className="outline-none form-control block w-full px-3 py-4  placeholder:text-white bg-transparent border-2"
            id="exampleFormControlInput1"
            placeholder="Your Name*"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <input
            type="text"
            className="form-control block w-full px-3 py-4 outline-none  placeholder:text-white bg-transparent border-2"
            id="exampleFormControlInput1"
            placeholder="Your Email*"
          />
        </div>
      </div>
      <div className="px-[5%] md:px-[10%] lg:px-[20%]">
        <div className="w-full p-4 flex">
          <input
            type="text"
            className="form-control w-full px-3 pb-32 bg-transparent border-2 placeholder:text-white flex"
            id="exampleFormControlInput1"
            placeholder="Your Message*"
          />
        </div>
        <div className="flex items-center mb-4 p-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            className="ml-2 text-white dark:text-gray-300"
          >
            I'm okay with getting emails and having that activity tracked to
            improve my experience.
          </label>
        </div>
        <div className="p-4">
          <button
            className="btn2 px-5 py-2 relative border text-white border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
            type="button"
          >
            <span className="absolute inset-0 bg-yelloww"></span>
            <span className="absolute inset-0 flex justify-center items-center font-bold">
              SEND MESSAGE
            </span>
            SEND MESSAGE
          </button>
        </div>
      </div>
      <footer class="bg-gray-200 text-center lg:text-left">
        <div class="text-white text-center p-6 bg-gradient-to-r from-b-from via-b-via to-b-to ">
          © 2021 Copyright: Designed and developed by PP
        </div>
      </footer>
    </div>
  );
};

export default Footer;
