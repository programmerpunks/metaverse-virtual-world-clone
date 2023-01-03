import React from 'react'
import Card from './Card'
import {Data} from './TeamData'
const CoreTeam = () => {

  return (
    <div className='flex justify-center flex-wrap w-3/4  mx-auto mt-10 bg-sky-500 gap-8'>
         {Data.map((card, index) => {

return (
  <Card
    key={index}
    url={card.url}
    Name={card.Name}
    post={card.post}
    description={card.description}
  />
);
})}
    </div>
  )
}

export default CoreTeam

