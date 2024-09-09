"use client";

import React, { useState } from "react";
import CustomButton from "./button"; 

const Hero = () => {
  const [images, setImages] = useState([
    "/resource/logo.png",
    "/resource/logo.png",
    "/resource/logo.png",
    "/resource/logo.png",
  ]);

  const tickMarkUrl =
    "https://img.icons8.com/?size=100&id=pIPl8tqh3igN&format=png&color=000000";

  return (
    <section className="flex flex-col md:flex-row items-center justify-between pt-6 px-10 pb-10 bg-white">
      {/* Left section for heading and description */}
      <div className="flex-1 mb-6 md:mb-0">
        <h1 className="sm:text-[42px] md:text-[48px] leading-[68px] text-[56px] !font-['Hanken_Grotesk'] tracking-[0.20px] !text-[#001153] font-bold mt-0">
          Students Association <br />
          <span className="block mt-2">of Information Technology</span>
        </h1>

        <p className="text-[20px] !text-[#001153] w-full !font-['Hanken_Grotesk'] font-normal leading-9">
          Official Student Association of the Division of Information Technology
          at Cochin University of Science and Technology.
        </p>

        {/* Event and Placement Sections */}
        <div className="flex flex-col md:flex-row gap-10 mt-4">
          {/* Event Details */}
          <div className="flex flex-col items-start justify-center gap-3">
            <CustomButton
              text="Events"
              icon="❤"
              className="bg-blue-900 text-white"
            />
            <img
              className="h-[24px]"
              src={tickMarkUrl}
              alt="Event Checkmark"
              loading="lazy"
            />
            <h3 className="text-[16px] text-[#001153] font-bold">
              18 November 2019
            </h3>
            <p className="text-[16px] text-[#5a7184] font-normal leading-7">
              25+ top notch speakers @ <br />
              Sebostudio Gallery Kreavi
            </p>
          </div>

          {/* Placement Details */}
          <div className="flex flex-col items-start justify-center gap-3">
            <CustomButton
              text="Placements"
              icon="“”"
              className="border-2 border-blue-900 text-blue-900 mt-5"
            />
            <img
              className="h-[24px]"
              src={tickMarkUrl}
              alt="Startup Checkmark"
              loading="lazy"
            />
            <h3 className="text-[16px] text-[#001153] font-bold">
              100+ startups
            </h3>
            <p className="text-[16px] text-[#5a7184] font-normal leading-7">
              Top 8 startups competing
              <br />
              in final @ TheFutureTalks
              <br />
              Conference 2019
            </p>
          </div>
        </div>
      </div>

      {/* Right section for images */}
      <div className="flex-1 grid grid-cols-2 gap-2 mt-8 md:mt-0">
        <img
          src={images[0]}
          alt="Image 1"
          className="col-span-2 w-full h-[200px] rounded-lg object-cover"
        />
        <img
          src={images[1]}
          alt="Image 2"
          className="col-span-1 w-full h-[200px] rounded-lg object-cover"
        />
        <img
          src={images[2]}
          alt="Image 3"
          className="col-span-1 w-full h-[200px] rounded-lg object-cover"
        />
        <img
          src={images[3]}
          alt="Image 4"
          className="col-span-2 w-full h-[200px] rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
