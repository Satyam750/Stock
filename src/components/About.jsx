import React from 'react'
import about from "../assets/about-img.png"
import { FaArrowRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { SiProcesswire } from "react-icons/si";
import {motion} from "framer-motion";


const About = () => {
    return (
        <div className='text-white bg-[#06030E] h-[135vw] px-[10vw] pt-[5vw]'>

            <div className='flex items-center justify-center flex-col gap-[2vw]'>
                <motion.h1 initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}} className='font-semibold text-[4.5vw]'>
                    About Our Product <br /> <h1 className='font-semibold text-[4.5vw] ml-[10vw]'>& Features </h1>
                </motion.h1>
                <motion.p initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}} className='font-normal text-[.9vw] text-gray-500'>Empower your teams to build better processes, for a better <br /> <span className='font-normal text-[.9vw] ml-[10vw]'>workplace.</span></motion.p>
            </div>
            <div className='flex gap-[2vw] pt-[2vw] mt-[2vw]'>
                <motion.div initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}} className=' h-[20vw] w-[40vw]'>
                    <img src={about} alt="" />
                </motion.div>
                <motion.div initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}} className=' h-[20vw] w-[32vw] flex flex-col gap-[1.2vw]'>
                    <div className='flex'><p className='text-blue-300'>Lorem ipsum dolor</p></div>
                    <h1 className='text-[2.5vw] font-semibold'>Lorem ipsum dolor sit amet consectetur.</h1>
                    <div className='about flex flex-col gap-5'>
                        <p className='text-[.9vw] text-gray-500'>With great teams come great processes. Using our developer API,
                            create and publish extensions to your organization’s Private
                            Extension Store for your team to install. </p>
                        <p className='text-[.9vw] text-gray-500'>Build extensions to quickly access company brand assets, log
                            feedback, book time off, or search your employee index.</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p>Explore More</p>
                        <FaArrowRight/> 
                    </div>
                </motion.div>
            </div>

            <motion.div initial={{opacity:0,y:-150}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}} className=' hover:bg-gray-800 transition-all ease-in-out duration-100 cursor-pointer h-[39vw] w-full mt-[5vw] rounded-2xl flex items-center justify-center relative'>
                   <span className='font-extrabold text-[9vw] text-shadow border-zinc-400 text-zinc-700'>Features</span>
                  <FaPlayCircle className='text-[6vw] absolute top-[18vw] cursor-pointer hover:bg-zinc-600 rounded-full'/>
            </motion.div>

            <div className='mt-[2vw] flex gap-9 ml-[5vw]'>
                <motion.div initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}} className='hover:bg-gray-800 transition-all ease-in-out duration-100 cursor-pointer h-[13vw] w-[20vw] rounded-2xl py-3 px-3  flex flex-col gap-5'> 
                   <FaRegUser className='text-[1.5vw]'/>
                    <h1 className='font-semibold text-[1.4vw]'>Users</h1>
                    <p className='text-[.9vw] text-gray-500'>Stay on top of your growing company by <br />
                    making it easy to search, and get to know,<br />
                    your teammates. </p>
                </motion.div>
                
                <motion.div initial={{opacity:0,x:-500}} whileInView={{opacity:1,x:0}} transition={{duration:1.2 , delay:.6}} className='hover:bg-gray-800 transition-all ease-in-out duration-100 cursor-pointer h-[13vw] w-[20vw] rounded-2xl py-3 px-3  flex flex-col gap-5'> 
                   <IoIosSearch className='text-[1.5vw]'/>
                    <h1 className='font-semibold text-[1.4vw]'>Research Analysis</h1>
                    <p className='text-[.9vw] text-gray-500'>Keep your visuals consistently on-brand  <br />
                    with easily accessible colors, icons, <br />
                    screenshots and more, for the whole team. </p>
                </motion.div>

                <motion.div initial={{opacity:0,x:-300}} whileInView={{opacity:1,x:0}} transition={{duration:1.2 , delay:.6}} className=' hover:bg-gray-800 transition-all ease-in-out duration-100 cursor-pointer h-[13vw] w-[20vw] rounded-2xl py-3 px-3  flex flex-col gap-5'> 
                   <SiProcesswire className='text-[1.5vw]'/>
                    <h1 className='font-semibold text-[1.4vw]'>A.P</h1>
                    <p className='text-[.9vw] text-gray-500'>Set up template bug report forms to give  <br />
                    timely and actionable feedback on features <br />
                    and projects in development. </p>
                </motion.div>
               
            </div>

            <div className='mt-[5vw] relative'>
                <div className='row relative'>
                <div className='h-[0.1vw] w-full bg-slate-800 absolute '></div>
                <div className='h-[0.1vw] w-full bg-slate-800 absolute top-[15vw]'></div>
                <div className='h-[0.1vw] w-[20vw] bg-slate-800 rotate-90 top-[8vw] left-[40vw] absolute'></div>
                <div className='h-[0.1vw] w-[20vw] bg-slate-800 rotate-90 top-[8vw] left-[15vw] absolute'></div>
                </div>
                 <div className='relative'>
                  <div className='flex flex-col h-[18vw] w-[16vw] gap-7 absolute left-16 top-5'>
                    <h1 className='font-semibold text-[3vw]'>100k+</h1>
                    <h1 className='font-normal text-[1.5vw]'>cumulative trading volume to date</h1>
                  </div>
                  <div className='flex flex-col h-[18vw] w-[16vw] gap-7 absolute left-[30vw] top-5'>
                    <h1 className='font-semibold text-[3vw]'>1,200+</h1>
                    <h1 className='font-normal text-[1.5vw]'>crypto-assets pairs</h1>
                  </div>
                  <div className='flex flex-col h-[18vw] w-[16vw] gap-7 absolute left-[56vw] top-5'>
                    <h1 className='font-semibold text-[3vw]'>25k+</h1>
                    <h1 className='font-normal text-[1.5vw]'>leading gloabal and local crypto exchanges</h1>
                  </div>

                 </div>
            </div>
        </div>
    )
}

export default About