import { Carousel } from 'antd'
import data from './data'
import MiniCarousel from './MiniCarousel'
import RoadMapCarousel from './RoadMapCarousel'
import { r_data } from './RoadMapData'
import DividerYellow from '../shared/DividerYellow'

const RoadMap = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark'>
        <div className='pt-10'>

          <DividerYellow />
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark text-white py-10">
        <div className="max-w-complete">
          <div className="text-center space-y-5">
            <h1 className="text-6xl font-black">Road Map of Company</h1>

            <p className="text-lg font-light">
              Our mission is simple: We seek the truth and help people
              understand the world. This mission is rooted in our belief that
              great journalism has the power to make each reader’s life richer
              and more fulfilling, and all of society stronger and more just.
            </p>
          </div>
          <div className="w-full py-10 relative">
            <Carousel
              autoplay={true}
              pauseOnHover={false}
              autoplaySpeed={3000}
              dots={false}
              speed={1000}
              slidesToShow={6}
              className="flex absolute -mb-8"
            >
              {data.map((item, index) => {
                return (
                  <MiniCarousel key={index} date={item.date} year={item.year} />
                )
              })}
            </Carousel>

            <div className="w-full bg-white h-5"></div>
          </div>
          <div className="flex justify-center">
            <div className="lg:max-w-[1300px] md:max-w-[800px] max-w-xs md:w-fit  lg:ml-80">
              <Carousel
                autoplay={true}
                pauseOnHover={false}
                autoplaySpeed={2000}
                dots={false}
                speed={100}
                className="py-5"
              >
                {r_data.map((item, index) => {
                  return <RoadMapCarousel url={item.url} key={index} />
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMap
