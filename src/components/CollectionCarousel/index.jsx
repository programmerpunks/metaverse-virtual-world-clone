import CarouselComp from "./CarouselComp";
import data1 from "./data1";
import data2 from "./data2";
import data3 from "./data3";
import DividerYellow from "../shared/DividerYellow";

const CollectionCarousel = () => {
  return (
    <div className="xxl:w-auto xl:w-[100%] sm:block hidden bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark">
      <div className="text-center py-10">
        <div className="pb-10">
          <DividerYellow />
        </div>
        <p className="uppercase md:text-6xl text-3xl font-black text-white">
          From Collection
        </p>
      </div>
      <CarouselComp data={data1} speed={2000} />
      <CarouselComp data={data2} speed={3000} />
      <CarouselComp data={data3} speed={4000} />
    </div>
  );
};

export default CollectionCarousel;
