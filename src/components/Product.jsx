import React from "react";
import image1 from "../assets/g-logo.png"
import image2 from "../assets/g2-logo.png"
import image3 from "../assets/group-p.png"
import {motion} from "framer-motion";


const Product = () => {
    return (
        <div className="text-white bg-[#06030E] h-[88vw] px-[10vw] pt-[5vw]">
            <div className="flex justify-between">
                <div className="head">
                    <motion.h1 initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}}  className="font-semibold text-[3vw]">How Our Product</motion.h1>
                    <motion.h1 initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2, delay:.6}}  className="font-semibold text-[3vw]">Works</motion.h1>
                </div>
                <motion.div initial={{opacity:0,y:-150}} whileInView={{opacity:1,y:0}} transition={{duration:1.2}}  className="para h-24 w-[38vw] mt-[2vw]">
                    <p className="font-normal text-[.9vw] text-gray-500">
                        With Cobalt, managing your business finances is effortless,
                        empowering, and anything but boring. Our intuitive platform brings
                        clarity to your cash flow, simplifies your financial
                        decision-making, and fingertips.
                        <span className="font-normal text-[.9vw] text-white">
                            Say no to spreadsheets and tools designed in the 80s.
                        </span>
                    </p>
                </motion.div>
            </div>

            <div className="mt-[2vw] flex ml-[20vw]">
                <div className="container border-[.5px] border-gray-500 h-[28vw] w-[13vw] p-[1.5vw] flex flex-col gap-24">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold text-[2vw]">Step 1</h1>
                        <p className="font-normal text-[.9vw] text-gray-500">
                            We start every new client interaction with an in-depth discovery
                            call where we get to know each other, discuss your current and
                            future objectives, and recommend the best course of action.
                        </p>
                    </div>
                    <span className="h-[2vw] w-[2vw] bg-blue-500 rounded-full ml-9"></span>
                </div>
                <div className="container border-[.5px] border-gray-500 h-[28vw] w-[13vw] p-[1.5vw] flex flex-col gap-28">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold text-[2vw]">Step 2</h1>
                        <p className="font-normal text-[.9vw] text-gray-500">
                            Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.
                        </p>
                    </div>
                    <span className="h-[2vw] w-[2vw] bg-pink-500 ml-9 "></span>
                </div>

                <div className="container border-[.5px] border-gray-500 h-[28vw] w-[13vw] p-[1.5vw] flex flex-col gap-20">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold text-[2vw]">Step 3</h1>
                        <p className="font-normal text-[.9vw] text-gray-500">
                            After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or asset will be designed, reviewed, and given your stamp of approval.
                        </p>
                    </div>
                    <img src={image1} className="h-[3.5vw] w-[3.5vw] ml-10" alt="" />
                </div>

                <div className="container border-[.5px] border-gray-500 h-[28vw] w-[13vw] p-[1.5vw] flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold text-[2vw]">Step 4</h1>
                        <p className="font-normal text-[.9vw] text-gray-500">
                            Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.
                        </p>
                    </div>
                    <img src={image2} className="h-[6vw] w-[6vw] ml-2" alt="" />
                </div>


            </div>

            <div className=' flex gap-[20vw]'>
                <div className="hed mt-[10vw] flex flex-col gap-[2vw]">
                    <motion.h1 initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}}  className="font-semibold text-[2.8vw]">Our Stock Market <br />
                        Experties</motion.h1>
                    <motion.p initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}}  className="font-normal text-[.9vw] text-gray-500 w-[24vw]">Empower your teams to build better processes, for a better
                        workplace.</motion.p>
                    <button className="px-6 py-2 bg-white text-black rounded-xl w-[12vw] hover:bg-gray-600 hover:text-white transition-all delay-100">Join Expert Team</button>
                </div>
                 
                <div className="relative">
                <div className="bg-black h-[10vw] w-[30vw] absolute z-2 opacity-30 -left-10 top-6"></div>
                <img src={image3} className="h-[35vw] mt-[5vw] " alt="" />
                <div className="bg-black h-[10vw] w-[30vw] absolute z-2 opacity-40 -left-10 top-[30vw]"></div>
                </div>

            </div>
        </div>
    );
};

export default Product;
