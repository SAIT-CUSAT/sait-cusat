"use client"
import React, { useState } from "react";
import CustomButton from "../../../components/button"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src="/resource/logo.png" alt="Logo" className="h-16 w-16" />
      </div>

      {/* Hamburger icon for mobile screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Links (Hidden on smaller screens, visible on medium and up) */}
      <ul className={`md:flex items-center gap-[50px] ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li>
          <a href="#">
            <h6 className="text-[16px] !text-[#183b56] font-semibold">Home</h6>
          </a>
        </li>
        <li>
          <a href="#">
            <h6 className="text-[16px] !text-[#183b56] font-semibold">
              Placements
            </h6>
          </a>
        </li>
        <li>
          <a href="#">
            <h6 className="text-[16px] !text-[#183b56] font-semibold">Events</h6>
          </a>
        </li>
        <li>
          <a href="#">
            <h6 className="text-[16px] !text-[#183b56] font-semibold">
              Executives
            </h6>
          </a>
        </li>
        <li>
          <a href="#">
            <h6 className="text-[16px] !text-[#183b56] font-semibold">
              Contact Us
            </h6>
          </a>
        </li>
        <li>
          <CustomButton
            text="Notes"
            className="min-w-[166px] h-[48px] font-bold justify-center text-center cursor-pointer whitespace-nowrap rounded-[24px] px-[34px] text-[16px] border-[#001254] border-2 border-solid text-[#001254] hover:bg-blue-100"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
