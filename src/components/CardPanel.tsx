'use client'

import { useReducer } from 'react'
import Card from './Card'
import Link from 'next/link'

type RatingMap = Map<string, number>

type Action =
  | { type: 'SET_RATING'; venueName: string; rating: number }
  | { type: 'REMOVE_VENUE'; venueName: string }

function reducer(state: RatingMap, action: Action): RatingMap {
  const newMap = new Map(state)
  switch (action.type) {
    case 'SET_RATING':
      newMap.set(action.venueName, action.rating)
      return newMap
    case 'REMOVE_VENUE':
      newMap.delete(action.venueName)
      return newMap
    default:
      return state
  }
}

const venues = [
  { vid: '001', venueName: 'The Bloom Pavilion', imgSrc: '/img/bloom.jpg' },
  { vid: '002', venueName: 'Spark Space', imgSrc: '/img/sparkspace.jpg' },
  { vid: '003', venueName: 'The Grand Table', imgSrc: '/img/grandtable.jpg' },
]

const initialState: RatingMap = new Map([
  ['The Bloom Pavilion', 0],
  ['Spark Space', 0],
  ['The Grand Table', 0],
])

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div className="flex justify-around px-12 py-16" style={{ marginTop: '4rem' }}>
        {venues.map(({ vid, venueName, imgSrc }) => (
          <Card
            key={vid}
            vid={vid}
            venueName={venueName}
            imgSrc={imgSrc}
            rating={ratings.get(venueName) ?? 0}
            onRatingChange={(newRating) =>
              dispatch({ type: 'SET_RATING', venueName, rating: newRating })
            }
          />
        ))}
      </div>
      <div className="px-12 pb-8 text-black">
        <p>Venue List with Ratings : {ratings.size}</p>
        {Array.from(ratings.entries()).map(([venueName, rating]) => (
          <div
            key={venueName}
            data-testid={venueName}
            onClick={() => dispatch({ type: 'REMOVE_VENUE', venueName })}
            className="cursor-pointer"
          >
            {venueName} Rating : {rating}
          </div>
        ))}
      </div>
    </div>
  )
}
