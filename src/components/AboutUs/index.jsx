import img from '../../images/about-us/nft_team.png'
import Spikes from './Spikes'
const AboutUs = () => {
  return (
    <div className="bg-yelloww px-5">
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
