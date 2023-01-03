import { Carousel } from 'antd'
import data from './data'
import CarouselComp from './CarouselComp'

const Right = () => {
  return (
    <Carousel dotPosition={'right'} autoplay={true} pauseOnHover={false}>
      {data.map((item, index) => {
        return <CarouselComp img={item.img} title={item.title} key={index} />
      })}
    </Carousel>
  )
}

export default Right
