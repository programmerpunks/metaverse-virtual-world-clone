import data1 from './data1'
import data2 from './data2'
import data3 from './data3'
import CarouselComp from "./CarouselComp"

const CollectionCarousel = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      <div className="text-center py-10">
        <p className='uppercase text-6xl font-black text-white'>From Collection</p>
      </div>
      <CarouselComp data={data1} speed={2000} />
      <CarouselComp data={data2} speed={3000} />
      <CarouselComp data={data3} speed={4000} />
    </div>
  )
}

export default CollectionCarousel
