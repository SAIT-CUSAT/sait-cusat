import React from 'react';
import recruiters from '@/data/recruiters';

const Marquee = () => {
  return (
    <div className="overflow-hidden">
      {/* First Row: Left to Right */}
      <div className="marquee-row flex items-center space-x-4 py-3 animate-marquee">
        {recruiters.map((recruiter, index) => (
          <div key={index} className="recruiter-card w-80">
            <img
              src={recruiter.image}
              alt={recruiter.name}
              className="w-50 h-22 object-cover rounded-lg shadow-2xl"
            />
          </div>
        ))}
      </div>

      {/* Second Row: Right to Left */}
      <div className="marquee-row-reverse flex items-center space-x-4 py-4 animate-marquee-reverse">
        {recruiters.map((recruiter, index) => (
          <div key={index} className="recruiter-card w-80">
            <img
              src={recruiter.image}
              alt={recruiter.name}
              className="w-full h-22 object-cover rounded-lg shadow-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
