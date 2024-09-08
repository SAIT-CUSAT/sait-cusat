import React from 'react'

export default function Card({image,title,description}) {
    return (
        <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            {/* Image that covers the entire card */}
            <img
                src={image}
                alt="Graduation Party"
                className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950 to-transparent opacity-75"></div>

            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-sm mt-1">
                    {description}
                </p>
                <a
                    href="#"
                    className="inline-block mt-4 text-green-300 hover:text-green-400 text-sm"
                >
                    Learn more &rarr;
                </a>
            </div>
        </div>
    )
}
