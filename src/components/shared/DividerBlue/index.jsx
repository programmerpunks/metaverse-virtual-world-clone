import React from "react";
import './divider.css'
const DividerBlue = () => {
  return (
    <div className="flex justify-center bg-yelloww">
      <div className="h-4 max-w-full relative w-[444px]" data-color="2">
        <div className=" bg-blue-600 h-[2px] left-0 -mt-1 absolute right-0 top-3"></div>
        <div className="middle bg-blue-600 h-[100%] left-[50%] -ml-[48px] absolute w-24 "></div>
        <div className="left1 bg-blue-600"></div>
        <div className="left2 bg-blue-600"></div>
        <div className="right1 bg-blue-600"></div>
        <div className="right2 bg-blue-600"></div>
      </div> </div>

  );
};

export default DividerBlue;
