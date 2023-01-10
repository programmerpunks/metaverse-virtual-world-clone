import Circle from './Circle'

const MiniCarousel = ({ date, year }) => {
  return (
    <div>
      <div className="text-center text-lg font-semibold uppercase">
        <p className='text-white'>{date}</p>
        <p className='text-yelloww '>{year}</p>
      </div>
      <div className='flex justify-center'>

      <div className="bg-yelloww h-10 w-1 -mb-1"></div>
      </div>
      <Circle />
    </div>
  )
}

export default MiniCarousel
