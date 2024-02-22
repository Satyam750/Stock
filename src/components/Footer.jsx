import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white bg-[#06030E] h-[20vw] px-[10vw] pt-[5vw]">
       <div className='h-[.04vw] w-full bg-gray-500 mb-7'></div>
        
            <div className='mainfooter flex gap-[30vw]'>

            <div className='first flex flex-col gap-5'>
                <h1 className='font-semibold text-[1.2vw]'>Stock P Logo</h1>
                <p className='font-normal text-[.9vw] text-gray-500 w-[16vw]'>Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below</p>
                <div className='flex gap-[1.3vw]'>
                    <FaFacebook className='text-[2.4vw] text-black bg-white rounded-full p-1.5 hover:bg-gray-700 transition-all ease-in-out duration-150 cursor-pointer'/>
                    <FaLinkedin className='text-[2.4vw] text-black bg-white rounded-full p-1.5 hover:bg-gray-700 transition-all ease-in-out duration-150 cursor-pointer'/>
                    <FaXTwitter className='text-[2.4vw] text-black bg-white rounded-full p-1.5 hover:bg-gray-700 transition-all ease-in-out duration-150 cursor-pointer'/>
                    <FaInstagram className='text-[2.4vw] text-black bg-white rounded-full p-1.5 hover:bg-gray-700 transition-all ease-in-out duration-150 cursor-pointer'/>
                </div>
            </div>
                
          <div className='flex gap-[10vw]'>
          <div className='midfooter'>
                        <ul className='cursor-pointer'>
                           Product
                           <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>About Us</li> 
                           <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>FAQ's</li> 
                           <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>PRivacy Policy</li> 
                           <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>Terms of Service</li> 
                           <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>Disclaimer</li> 
                           <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>Submit Grievance</li> 
                           <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>Features</li> 
                        </ul>
                </div>
                <div className='lastfooter'>
                          <ul className='cursor-pointer'>
                            Community
                            <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>Subscription</li>
                            <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>Courses</li>
                            <li className='font-normal text-[.9vw] text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out duration-150'>Webinar</li>
                          </ul>
                </div>
          </div>
            </div>
    </div>
  )
}

export default Footer