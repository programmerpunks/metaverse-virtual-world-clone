import React from "react";
import './divider.css'
const DividerYellow = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark">
      <div className="h-4 max-w-full relative w-[444px]" data-color="2">
        <div className=" bg-yelloww h-[2px] left-0 -mt-1 absolute right-0 top-3"></div>
        <div className="middle bg-yelloww h-[100%] left-[50%] -ml-[48px] absolute w-24 "></div>
        <div className="left1 bg-yelloww"></div>
        <div className="left2 bg-yelloww"></div>
        <div className="right1 bg-yelloww"></div>
        <div className="right2 bg-yelloww"></div>
      </div> </div>

  );
};

export default DividerYellow;
