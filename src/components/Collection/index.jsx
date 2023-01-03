import Spikes from './Spikes'

const Collection = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark relative pt-20">
        <Spikes />
        <div className="absolute top-[20%] w-full h-full items-center space-y-10 text-white">
          <div className="flex justify-center">
            <h1 className="text-9xl font-extrabold text-yelloww">10,000</h1>
          </div>
          <div className="flex justify-center">
            <h4 className="text-3xl font-extrabold uppercase">
              Total Items in Collection
            </h4>
          </div>
          <div className="flex justify-center">
            <p className="w-[700px] text-center">
              There are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="p-1 border border-white">
              <div className="bg-white hover:bg-yelloww transition ease-linear">
                <p className="uppercase font-semibold px-16 py-3 text-black">
                  See All
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="h-[800px] bg-transparent"></div>
    </>
  )
}

export default Collection
