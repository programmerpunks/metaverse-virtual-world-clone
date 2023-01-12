import React from "react";

import "./Border.css";
const Card = ({ url, Name, post, description }) => {
  // console.log(url,name,post,description);
  return (
    <div className="relative w-[360px] h-max">
      <img src={url} alt='' className="anm"/>
      <div className="absolute text-dull-yellow w-full bottom-0">
        <div className='p-3'>
          <div className='flex justify-center bg-black'>
            <p className='text-white text-sm font-semibold py-2'>{post}</p>
          </div>
          <div className='text-center bg-yelloww text-black py-2'>
            <p className='font-bold'>{Name}</p>
            <p className='font-base'>{description}</p>
          </div>
        </div>
      </div>
    </div>  );
};

export default Card;
