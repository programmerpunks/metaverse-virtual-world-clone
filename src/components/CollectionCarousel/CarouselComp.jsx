import { Carousel } from 'antd'

const CarouselComp = ({ data, speed }) => {
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
      {data.map((item, index) => {
        return (
          <div className="px-5 flex justify-center" key={index}>
            <div className="bg-white/20 border px-3 w-full h-full">
              <img src={item.img} className="h-96 w-64 anm" alt="" />
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default CarouselComp
