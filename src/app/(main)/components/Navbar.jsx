import React from "react";
import CustomButton from "./button"; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-white shadow-md">
      <div className="text-xl font-bold">
        <img src="/resource/logo.png" alt="Logo" className="h-16 w-16" />
      </div>

      <ul className="flex items-center gap-[50px]">
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
