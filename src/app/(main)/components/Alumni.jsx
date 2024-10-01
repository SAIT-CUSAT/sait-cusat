"use client"
import React from 'react'
import {alumni} from '../../../data/alumni'
import AlumniCard from './AlumniCard'

export default function Alumni() {
    return (
        <div className='px-20'>
            <span className='text-[#1f6145] bg-[#36B37E] bg-opacity-25 px-2 py-1 rounded-full text-xs'>Alumni</span>
            <h3 className='text-2xl   !text-[#001153] font-bold mb-4  z-10 pt-3'>Featured Alumni's</h3>
            <div className='grid grid-cols-4 gap-20 justify-center my-14'>
                {alumni.map((card, index) => (
                    <AlumniCard
                        key={index} // Add a unique key for each card
                        image={card.image}
                        name={card.name}
                        role={card.role}
                    />
                ))}
            </div>
        </div>
    )
}
