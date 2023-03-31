import { Carousel } from "antd";

import DividerYellow from "../shared/DividerYellow";
import Triangle from "./Triangle";

const BlogArticle = () => {
  return (
    <div className="bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark">
      <Triangle />
      <div className="pt-10">
        <DividerYellow />
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1300px] text-center text-white">
          <p className="uppercase sm:text-6xl text-3xl font-black py-10">
            Blog Articles
          </p>
          <p className="text-xl font-light px-5">
            This is your chance to take your reader on a journey. What have you
            achieved along the way and what do you envision next? Developing a
            narrative is really quite simple if you follow a template, like the
            one below. As you fill in your template, consider the characters and
            the setting, the problem you solved, the obstacles you hit, the
            milestones you achieve, and what your brand's future looks like.
          </p>
          <Carousel
            dots={false}
            autoplay={true}
            pauseOnHover={false}
            slidesToShow={1}
            className="hidden"
          ></Carousel>
          <div className="flex  lg:justify-end justify-center   lg:py-5 py-9 lg:pr-10 uppercase text-yelloww underline font-semibold">
            <a href="?">Read all blog posts</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
