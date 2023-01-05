const CarouselComp = ({ img, title, meta, desc }) => {
  return (
    <div className="p-10">
      <div className="p-8 border border-white/50">
        <div className="bg-white/20 border border-white/80">
          <img src={img} alt="" className="bg-cover w-full" />
          <div className="text-left py-10 px-8 text-white">
            <p className="pb-3 text-yelloww text-base font-semibold">{meta}</p>
            <h3 className="pb-5 text-2xl font-semibold">{title}</h3>
            <p className="pb-5 text-base font-normal">{desc}</p>
            <button className="p-1 border border-white">
              <div className="hover:bg-white bg-yelloww transition ease-linear">
                <p className="uppercase font-semibold px-16 py-3 text-black">
                  Mint Now
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselComp
