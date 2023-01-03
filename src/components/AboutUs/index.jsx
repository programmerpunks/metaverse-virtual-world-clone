import img from '../../images/about-us/nft_team.png'
import Spikes from './Spikes'
const AboutUs = () => {
  return (
    <div className="bg-yelloww px-5">
      <svg x="0px" y="0px" viewBox="0 0 1920 155" alt="">
        <polygon points="1920,120 1920,155 0,155 0,120 380,50 321,100 648,30 581,82 960,0 1339,82 1272,30 1599,100 1540,50" fill='white'></polygon>
        <polygon points="1920,120 1920,155 0,155 0,120 360,60 321,100 619,43 581,82 960,20 1339,82 1301,43 1599,100 1560,60" fill='#feeb1a'></polygon>
      </svg>
      <div className="flex justify-center">
        <h1 className="uppercase text-4xl font-extrabold">About Us</h1>
      </div>
      <div className="py-10">
        <p>
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p>
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
      </div>
      <div className='relative'>
        <Spikes />
        <div className='absolute w-full bottom-0'>
          <div className='flex justify-center'>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
