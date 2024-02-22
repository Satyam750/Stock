import React from 'react'
import expimage from "../assets/image-exper.png"
import {motion} from "framer-motion";
const Expertise = () => {

  const Data = [
    {  
      id:1,
      title: "Arun Kumar",
      stock:"Stock Market",
      rate:"4.4",
      experience:"Experience",
      rate_exp: "7+",
      follow:"Followers",
      totalfollow:"3.1k",
      dis:"Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023. ",
      amount:"1,999/mo",
      button:"Subscription",
      img: expimage,
    },
    {  
      id:2,
      title: "Arun Kumar",
      stock:"Stock Market",
      rate:"4.4",
      experience:"Experience",
      rate_exp: "7+",
      follow:"Followers",
      totalfollow:"3.1k",
      dis:"Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023. ",
      amount:"1,999/mo",
      button:"Subscription",
      img: expimage,
    },
    {  
      id:3,
      title: "Arun Kumar",
      stock:"Stock Market",
      rate:"4.4",
      experience:"Experience",
      rate_exp: "7+",
      follow:"Followers",
      totalfollow:"3.1k",
      dis:"Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023. ",
      amount:"1,999/mo",
      button:"Subscription",
      img: expimage,
    },
    {  
      id:4,
      title: "Arun Kumar",
      stock:"Stock Market",
      rate:"4.4",
      experience:"Experience",
      rate_exp: "7+",
      follow:"Followers",
      totalfollow:"3.1k",
      dis:"Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023. ",
      amount:"1,999/mo",
      button:"Subscription",
      img: expimage,
    },
    {  
      id:5,
      title: "Arun Kumar",
      stock:"Stock Market",
      rate:"4.4",
      experience:"Experience",
      rate_exp: "7+",
      follow:"Followers",
      totalfollow:"3.1k",
      dis:"Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023. ",
      amount:"1,999/mo",
      button:"Subscription",
      img: expimage,
    },
    {  
      id:6,
      title: "Arun Kumar",
      stock:"Stock Market",
      rate:"4.4",
      experience:"Experience",
      rate_exp: "7+",
      follow:"Followers",
      totalfollow:"3.1k",
      dis:"Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023. ",
      amount:"1,999/mo",
      button:"Subscription",
      img: expimage,
    },

  ]

  return (
    <div className='text-white bg-[#06030E] h-[80vw] px-[10vw] pt-[5vw]'>
      <div className='flex flex-col gap-3'>
        <motion.h1 initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}} className='font-semibold text-[5vw]'>Our Expertise</motion.h1>
        <motion.p initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}}  className='font-normal text-[.9vw] text-gray-500'>Guiding Your Investments to Greatness: Our Expertise, Your Financial Advantage!</motion.p>
      </div>
        
   <div className='flex ml-[10vw] gap-[5vw] flex-wrap'>
       {Data.map((i)=>(  
   <div key={i.id} className='mt-8 flex flex-col gap-4'>
        <div className='img'>
          <img src={i.img} alt="" className='h-[10vw] ml-[-2vw]' />
        </div>
        <div className='name-main flex gap-28'>
          <div className='name'>
            <h1 className='font-semibold text-[1.1vw]'>{i.title}</h1>
            <p className='font-normal text-[.9vw]'>{i.stock}</p>
          </div>
          <div className='star'>
            <p className='font-normal text-[.9vw]'>{i.rate}</p>
          </div>
        </div>
        <div className='experince-main flex gap-24 relative '>
          <div className='experince flex flex-col items-center'>
            <h1 className='font-normal text-[.9vw]'>Experience</h1>
            <p>7+</p>
          </div>
          <div className='vertical-row h-[0.05vw] bg-white w-[3vw] absolute rotate-90 left-[6vw] top-[1.7vw]'></div>
            <div className='follower'>
                        <h1 className='font-normal text-[.9vw]'>Followers</h1>
                        <p>3.1k</p>
            </div>
        </div>
         <div className='para'>
          <p className='font-normal text-[.8vw] w-[15vw] text-gray-500'>Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023. </p>
         </div>
         <div className='price-btn flex items-center gap-12'>
          <h1 className='font-bold text-[1.2vw]'>1,999/mo</h1>
          <button className='px-5 py-2 text-black bg-white rounded-xl hover:bg-slate-700 transition-all ease-in-out duration-150 hover:text-zinc-300'>Subscription</button>
         </div>
      </div>
      ))}
    
   </div>

    </div>
  )
}

export default Expertise