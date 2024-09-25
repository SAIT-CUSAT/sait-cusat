import Card from '../../../components/Card'
import React from 'react'
import {events} from '../../../data/events'

export default function Events() {
    return (
        <div className='px-20'>
            <span className='text-[#1f6145] bg-[#36B37E] bg-opacity-25 px-2 py-1 rounded-full text-xs'>Events</span>
            <h3 className='text-2xl   !text-[#001153] font-bold mb-4  z-10 pt-3'>Featured Events</h3>
            <div className='grid grid-cols-4 gap-20 justify-center my-14'>
                {events.map((card, index) => (
                    <Card
                        key={index} // Add a unique key for each card
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}
