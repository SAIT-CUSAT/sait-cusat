"use client";
import React from "react";
import { alumni } from "../../../data/alumni"; // Adjusted path

export default function Alumnicard() {
  return (
    <div className="px-7">
                  <span className='text-[#1f6145] bg-[#36B37E] bg-opacity-25 px-2 py-1 rounded-full text-xs'>Alumni</span>
                  <h3 className='text-2xl   !text-[#001153] font-bold mb-4 px-6 z-10 pt-3'>Featured Alumni</h3>
    <div className="flex overflow-x-auto space-x-6 p-6">
      
      <div className="flex gap-6">
        
        {alumni.map((person, index) => (
          <div
            key={index}
            className="flex-none bg-white shadow-lg rounded-lg overflow-hidden w-64"
          >
            <img
              src={person.image}
              alt={`${person.name}'s image`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-600">{person.role}</p>
              <p className="text-gray-500">Year of Passing: {person.passoutYear}</p>
              <p className="text-gray-500">Position: {person.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
