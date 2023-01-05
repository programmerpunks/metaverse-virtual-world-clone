import React from 'react'
import SponsorCarousel from './SponsorCarousel'
import data from './SponsorData';

const Sponsor = () => {
  return (
    <div className='bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark px-64 py-20'>
       <div className="text-center py-10">
        <p className='uppercase text-6xl font-black text-white'>OUR SPONSORS</p>
      </div>
         <SponsorCarousel data={data} speed={2000} />
    </div>
  )
}

export default Sponsor;

