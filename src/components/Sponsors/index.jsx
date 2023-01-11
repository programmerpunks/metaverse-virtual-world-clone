import React from 'react'
import SponsorCarousel from './SponsorCarousel'
import data from './SponsorData'
import Divider from '../shared/DividerYellow'

const Sponsor = () => {
  return (
    <div className="bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark py-20">
      <Divider />
      <div className="text-center py-10">
        <p className='uppercase text-6xl font-black text-white'>OUR SPONSORS</p>
      </div>
      <SponsorCarousel data={data} speed={2000} />
    </div>
  )
}

export default Sponsor
