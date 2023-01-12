import React from 'react'
import Card from './Card'
import DividerYellow from '../shared/DividerYellow'
import { Data } from './TeamData'
import Flash from './Flash'
const CoreTeam = () => {
  return (
    <div className="bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark space-y-10">
      <DividerYellow />
      <div className="flex justify-center flex-wrap w-3/4  mx-auto py-10 gap-8">
        <div className="max-w-6xl text-center text-white space-y-10">
          <h1 className="text-6xl font-extrabold">Our Core Team</h1>
          <p className="text-lg font-light">
            Nothing motivates us more than the exceptionally talented people who
            make up Frenify. We celebrate, but don’t shout about the diversity
            of our talented team. It is, quite frankly in our DNA; it’s who we
            are in every fiber of our being. We always seek inspiration to fuel
            our creative drive and the creative drive of our client partners we
            create with.
          </p>
        </div>
        {Data.map((card, index) => {
          return (
            <Card
              key={index}
              url={card.url}
              Name={card.Name}
              post={card.post}
              description={card.description}
            />
          )
        })}
      </div>
      <Flash />
    </div>
  )
}

export default CoreTeam
