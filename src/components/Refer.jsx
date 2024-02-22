import React from 'react'
import coin from "../assets/coin.png"
import man from "../assets/man-logo.png"
import {motion} from "framer-motion";

const Refer = () => {
  return (
    <div className='text-white bg-[#06030E] h-[50vw] px-[10vw] pt-[5vw]'>
      <div className='headref flex gap-[13vw]'>
        <div className='flex flex-col gap-3'>
          <motion.h1 initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}}  className='font-semibold text-[3vw] flex items-center gap-2'>Refer & Earn <img src={coin} className='h-[3vw] w-[3vw]' alt="" /></motion.h1>
          <motion.p initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}}  className='font-normal text-[.9vw] text-gray-500 w-[24vw]'>Empower your teams to build better processes, for a better
            workplace.</motion.p>
          <button className=' w-[17vw] px-8 py-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-700 hover:text-white transition-all delay-100 ease-in-out'>Become a Affiliate Partner</button>
        </div>
        <div className=' w-[39vw] mt-5'>
          <motion.p initial={{opacity:0,y:-150}} whileInView={{opacity:1,y:0}} transition={{duration:1.2}}  className='font-normal text-[.9vw] text-gray-500 '>With Cobalt, managing your business finances is effortless,
            empowering, and anything but boring. Our intuitive platform brings
            clarity to your cash flow, simplifies your financial decision-making, and
            fingertips. <span className='font-normal text-[.9vw] text-white'> Say no to spreadsheets and tools designed in the 80s.</span></motion.p>
        </div>
      </div>

      <div className='mt-[10vw]'>
        <div className='flex flex-col items-center gap-4'>
          <motion.h1 initial={{opacity:0,y:-150}} whileInView={{opacity:1,y:0}} transition={{duration:1.2}}  className='font-semibold text-[3vw] mr-[3vw]'>Testimonials</motion.h1>
          <motion.p initial={{opacity:0,y:150}} whileInView={{opacity:1,y:0}} transition={{duration:1.2}}  className='font-normal text-[.9vw] text-gray-500 w-[29vw] flex flex-col'>Our partnerships have delivered great value to our projects and <span className='flex items-center justify-center mr-[4vw]'>we’re happy to share some of their feedback below</span></motion.p>
               
          <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">

             
            <h1 className='text-white flex flex-col gap-6 items-center justify-center ml-[24vw] w-[30vw]'>Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most
             consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven 
             to be very reliable and trustworthy partner.
             We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.
             <div className='flex gap-2 mr-[10vw]'>
              <img src={man} className='h-[2vw]' alt="" />
                <div>
                <h1 className='font-semibold text-[1.2vw]'>Atthakrit Chimplapibul</h1>
                <p className='text-[.7vw] text-gray-500'>Co-founder & CEO of Bitkub</p>
                </div>
             </div>
             </h1>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
          <h1 className='text-white flex flex-col gap-6 items-center justify-center ml-[24vw] w-[30vw]'>Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most
             consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven 
             to be very reliable and trustworthy partner.
             We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.
             <div className='flex gap-2 mr-[10vw]'>
              <img src={man} className='h-[2vw]' alt="" />
                <div>
                <h1 className='font-semibold text-[1.2vw]'>Atthakrit Chimplapibul</h1>
                <p className='text-[.7vw] text-gray-500'>Co-founder & CEO of Bitkub</p>
                </div>
             </div>
             </h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
        </div>

        </div>
     
        

      </div>
    </div>
  )
}

export default Refer