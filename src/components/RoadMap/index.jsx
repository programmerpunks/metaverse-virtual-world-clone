import { Carousel } from "antd"

const RoadMap = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark text-white">
      <div className="max-w-complete">
        <div className="text-center">
          <h1 className="text-6xl font-black">Road Map of Company</h1>
          <p className="text-lg font-light">
            Our mission is simple: We seek the truth and help people understand
            the world. This mission is rooted in our belief that great
            journalism has the power to make each reader’s life richer and more
            fulfilling, and all of society stronger and more just.
          </p>
        </div>
        <div className="w-full">
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  )
}

export default RoadMap
