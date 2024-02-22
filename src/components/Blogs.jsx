import React from "react";
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import blog4 from "../assets/blog4.png"
import blog5 from "../assets/blog5.png"
import {motion} from "framer-motion";

const Blogs = () => {
  return (
    <div className="text-white bg-[#06030E] h-[80vw] px-[10vw] pt-[5vw]">
      <div className="flex gap-[20vw]">
        <motion.h1 initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}}  className="font-semibold text-[3vw] w-[20vw]">Our Blogs</motion.h1>
        <motion.p initial={{opacity:0,y:-150}} whileInView={{opacity:1,y:0}} transition={{duration:1.2}}  className="font-normal text-[.9vw] text-gray-500 w-[28vw]">
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and fingertips.
          <span className="font-normal text-[.9vw] text-white">
            Say no to spreadsheets and tools designed in the 80s.
          </span>
        </motion.p>
      </div>
      <div className="sec mt-10 flex gap-[6vw]">
        <div className=" h-[27vw] w-[20vw] p-5 flex flex-col gap-6">
              <img src={blog1}  alt="" />
              <h1 className="font-semibold text-[1.2vw]">Lorem ipsum dolor sit.</h1>
              <p className="text-[.9vw] text-gray-500">All your data and finances in one place to 
              provide quick answers and make decisions 
              instantly.</p>
        </div>
        <div className=" h-[27vw] w-[20vw] p-5 flex flex-col gap-6">
              <img src={blog2}  alt="" />
              <h1 className="font-semibold text-[1.2vw]">Lorem ipsum dolor sit.</h1>
              <p className="text-[.9vw] text-gray-500">Have full control of your business finances on 
              the go using our iOS/Android mobile apps. Because, you know, it’s 2023.</p>
        </div>
        <div className=" h-[27vw] w-[20vw] p-5 flex flex-col gap-6">
              <img src={blog3}  alt="" />
              <h1 className="font-semibold text-[1.2vw]">Lorem ipsum dolor sit.</h1>
              <p className="text-[.9vw] text-gray-500">Choose the alerts you need and receive them via email, mobile or Slack. Review and take 
              action in one click.</p>
        </div>
      </div>

      <div className=" mt-10 flex">
        <div className="h-[27vw] w-[45vw] p-5 flex flex-col gap-4">
            <img src={blog4} alt="" />
            <h1 className="font-semibold text-[1.2vw]">Lorem, ipsum dolor.</h1>
            <p className='text-[.9vw] text-gray-500 w-[20vw]'>Bring your data with our built-in integrations for accounting, revenue tools and banking.</p>
        </div>
        <div className="h-[27vw] w-[20vw] p-5 flex flex-col gap-4 mt-16">
            <img src={blog5} alt="" />
            <h1 className="font-semibold text-[1.2vw]">Lorem, ipsum dolor.</h1>
            <p className='text-[.9vw] text-gray-500 w-[20vw]'>Bring your data with our built-in integrations for accounting, revenue tools and banking.</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="px-8 py-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-700 hover:text-white transition-all delay-100">Explore More</button>
      </div>
    </div>
  );
};

export default Blogs;
