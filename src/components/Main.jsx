import React from 'react'
import main from "../assets/main.png"
import famer from "../assets/framer-logo.png"
import atalassian from "../assets/atlassian-logo.png"
import shopify from "../assets/shopify-logo.png"
import git from "../assets/gihub-logo.png"
import lunch from "../assets/lunch-logo.png"
import tail from "../assets/tail-logo.png"
import { FaArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion'

const Main = () => {
  return (
    <div className='relative text-white bg-[#06030E] h-[54vw] px-[4vw]'>
        <motion.div initial={{opacity:0, x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}} className='absolute left-[26vw]'>
            <img src={main} alt="" className='h-[45vw] ' />

        </motion.div>
        <motion.div  initial={{opacity:0, x:-150}} whileInView={{opacity:"0.05",x:0}} transition={{duration:1.1}}  className='h-[46vw] w-[46vw] rounded-full left-[27vw] absolute opacity-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></motion.div>
        <div className=' flex flex-col gap-[1.5vw] items-center justify-center relative top-[6vw]'>
            <motion.h1 initial={{opacity:0,y:-150}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}} className='font-semibold text-[4.5vw]'>Your team, <br /> reimagined.</motion.h1>
            <motion.p initial={{opacity:0,y:150}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}} className='font-normal text-[1.2vw] text-gray-400'>Take your up a level with easy-to-use tools, effortless <br /><span className='ml-20'> templates and efficient workflows</span> </motion.p>
            <button className='flex flex-col py-[.8vw] px-[2vw] bg-white text-black rounded-2xl hover:bg-gray-600 hover:text-white transition-all ease-in-out delay-100'>Get Started today</button>
            <div className='flex flex-col gap-4 items-center mt-[5vw]'>
            <p className='font-normal text-[.9vw] text-gray-400 '>Learn More</p>
            <FaArrowDown className='down-arrow'/>
            </div>
        </div>
        
        <div className='z-[999] absolute bottom-0 flex flex-col gap-5 items-center '>
        <p className='ml-[10vw]'>Trusted by teams at</p>
        <div className='flex gap-20 items-center ml-[8vw]'>
       
           <img src={famer} alt="" />
           <img src={atalassian} alt="" />
           <img src={shopify} alt="" />
           <img src={git} alt="" />
           <img src={lunch} alt="" />
           <img src={tail} alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default Main