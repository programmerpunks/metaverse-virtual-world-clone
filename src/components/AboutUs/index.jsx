import img from '../../images/about-us/nft_team.png'
import Divider from '../shared/DividerBlue'
import Spikes from './Spikes'

const AboutUs = () => {
  return (
    <div className="bg-yelloww px-5">
      
      <div className='pb-10'>
        <Divider />
        </div>
      <div className="flex justify-center">
        <h1 className="uppercase text-7xl font-black">About Us</h1>
      </div>
      <div className="flex justify-center py-10 pb-20">
        <div className="max-w-complete flex w-full gap-10">
          <p className="flex-1 text-lg">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="flex-1 text-lg">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
      </div>
      <div className="relative">
        <Spikes />
        <div className="absolute w-full bottom-0">
          <div className="flex justify-center">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
