const CarouselComp = ({ img, title }) => {
  return (
    <div className="p-10">
      <div className="p-8 border border-white/50">
        <div className="bg-white/20 flex justify-center border border-white/80">
          <img src={img} alt="" className="h-[690px] w-[550px]" />
        </div>
      </div>
      <div className="text-center pt-10">
        <h1 className="text-3xl font-extrabold text-yelloww uppercase">{title}</h1>
      </div>
    </div>
  )
}

export default CarouselComp
