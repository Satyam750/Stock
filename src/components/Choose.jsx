import React from 'react'
import choose1 from "../assets/choose-1.png"
import choose2 from "../assets/choose-2.png"
import choose3 from "../assets/choose-3.png"
import choose_main from "../assets/choose-main.png"
import {motion} from "framer-motion";

const Choose = () => {
    return (
        <div className='text-white bg-[#06030E] h-[74vw] px-[10vw] pt-[5vw]'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <motion.h1 initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2 ,}} className='font-semibold text-[5vw]'>Why Choose Us</motion.h1>
                <motion.p initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}} className='font-normal text-[.9vw] flex flex-col text-gray-500'>Turn Pro to harness the power of AI, make Raycast your own with custom themes,
                    <span className='font-normal text-[.9vw] ml-[10vw]'>keep your Macs in sync and more.</span></motion.p>
            </div>

            <div className='mt-[4vw]  flex gap-9 ml-16'>
                <div className='h-[20vw] w-[20vw] p-4 rounded-2xl flex flex-col gap-3'>
                    <img src={choose1} alt="" />
                    <h1 className='font-semibold'>Lorem, ipsum dolor.</h1>
                    <p className='font-normal text-[.9vw] text-gray-500'>Ask anything, anytime, <br /> anywhere. Stuck while <br /> programming? Need some copy? <br /> Or just have a question - Ask AI.</p>
                </div>
                <div className='h-[20vw] w-[20vw] p-4 rounded-2xl flex flex-col gap-3'>
                    <img src={choose2} alt="" />
                    <h1 className='font-semibold'>Lorem, ipsum dolor.</h1>
                    <p className='font-normal text-[.9vw] text-gray-500'>Keep everything safe and <br /> updated across your Macs.  <br /> Perfect to switch between  <br /> personal and work setup.</p>
                </div>
                <div className='h-[20vw] w-[20vw] p-4 rounded-2xl flex flex-col gap-3'>
                    <img src={choose3} alt="" />
                    <h1 className='font-semibold'>Lorem, ipsum dolor.</h1>
                    <p className='font-normal text-[.9vw] text-gray-500'>Make Raycast your own with  <br /> gorgeous pre-made themes or <br /> design your own and share it  <br /> with the community.</p>
                </div>
            </div>

            <div className='mt-14'>
                <img src={choose_main} alt="" />
            </div>
        </div>
    )
}

export default Choose