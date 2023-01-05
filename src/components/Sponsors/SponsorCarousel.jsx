import React from 'react'
import { Carousel } from 'antd'

const SponsorCarousel = ({ data, speed }) => {
//  console.log(data)
  return (
    <Carousel
      autoplay={true}
      pauseOnHover={false}
      variableWidth={true}
      autoplaySpeed={0}
      dots={false}
      speed={speed}
      className="py-5"
    >
      {/* {data.map((item, index) => {
        return (
          <div className="px-5 flex justify-center" key={index}>
            <div className="bg-white/20 border px-3 w-full h-full">
              <div className="h-[216px] w-[231px]" alt="" />
              <img src={item.url} alt="/" className=''/>
            </div>
          </div>
        )
      })} */}
      {data.map((item)=>{
        return (
          <div className='m-5'>
            <img className='w-52' src={item.url} alt="" />
          </div>
        )
      })}
    </Carousel>
  )
}



export default SponsorCarousel;

