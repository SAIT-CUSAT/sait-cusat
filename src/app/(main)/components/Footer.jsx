  import React from 'react'
  import { FaLinkedin } from "react-icons/fa";
  import { CgMail } from "react-icons/cg";
  import { FaInstagram } from "react-icons/fa";

  function Footer() {
    return (
      <div className='mt-32'>
          <img src='/footer/Wave.svg' alt='footer' layout='fill' objectFit='cover' className='-mb-5'/>
          <div className='bg-[#0D2436]  w-full h-32  flex flex-col justify-center items-center py-40'>
              <h1 className='text-xl text-gray-100 font-semibold'>Students Association of Information Technology</h1>
              <div className='my-7'>
                  <p className='font-light text-gray-300 text-sm'>Connect with us</p> 
                  <div className='flex justify-center items-center mt-4'>
                      <FaLinkedin className='text-gray-400'/>  
                      <CgMail className='text-gray-400 ml-4'/>
                      <FaInstagram className='text-gray-400 ml-4'/>
                  </div>
              </div>
              <p className='text-gray-500 text-sm mt-7'>Copyright © 2024. Crafted with love.</p>
          
          </div>
      </div>
    )
  }

  export default Footer
