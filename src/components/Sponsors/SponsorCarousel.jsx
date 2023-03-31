
import { Carousel } from 'antd'

const SponsorCarousel = ({ data, speed }) => {

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

