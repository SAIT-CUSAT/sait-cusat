"use client";

import React, { useState } from "react";
import CustomButton from "../../../components/button";

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
    <section className="flex flex-col md:flex-row items-center justify-between pt-6 px-4 md:px-20 pb-10 bg-white">
      {/* Left section for heading and description */}
      <div className="flex-1 mt-10 mb-6 md:mb-0">
        <h1 className="sm:text-[32px] md:text-[48px] leading-[48px] md:leading-[68px] tracking-[0.20px] !text-[#001153] font-bold mt-0 text-center md:text-left">
          Students Association <br />
          of Information Technology
        </h1>

        <p className="text-[18px] md:text-[20px] text-[#001153] w-full font-normal leading-7 md:leading-9 text-center md:text-left mt-4">
          Official Student Association of the Division of Information Technology
          at Cochin University of Science and Technology.
        </p>

        {/* Event and Placement Sections */}
     <div className="flex flex-col justify-start md:flex-row gap-10 mt-6 md:items-start items-center">
  {/* Event Details */}
  <div className="flex flex-col items-start justify-center gap-3 text-center md:text-left md:items-start">
    <CustomButton
      text="Events"
      icon="->"
      className="bg-[#001153] font-semibold w-full justify-between px-8 items-center text-white"
    />
    <img
      className="h-[24px] mx-auto md:mx-0"
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
  <div className="flex flex-col items-start justify-center gap-3 text-center md:text-left md:items-start">
    <CustomButton
      text="Placements"
      icon="->"
      className="border-2 border-blue-900 w-full justify-between px-8 items-center font-semibold text-blue-900"
    />
    <img
      className="h-[24px] mx-auto md:mx-0"
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
      <div className="flex-1 grid grid-cols-2 gap-2 mt-8 md:mt-0 w-full">
        <img
          src={images[0]}
          alt="Image 1"
          className="col-span-2 w-full h-[180px] sm:h-[200px] rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
