import { Carousel } from 'antd'
import data from './data'
import CarouselComp from './CarouselComp'
import Triangle from './Triangle'
import DividerYellow from '../shared/DividerYellow'

const BlogArticle = () => {
  return (
    <div className="bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark">
      <Triangle />
      <div className='pt-10'>
        <DividerYellow />
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1300px] text-center text-white">
          <p className="uppercase text-6xl font-black py-10">Blog Articles</p>
          <p className="text-xl font-light">
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
            slidesToShow={2}
          >
            {data.map((item, index) => {
              return (
                <CarouselComp
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  meta={item.meta}
                  key={index}
                />
              )
            })}
          </Carousel>
          <div className="flex justify-end pr-10 uppercase text-yelloww underline font-semibold">
            <a href="?">Read all blog posts</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle
