import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) { 
      setShow(false); 
    } else { 
      setShow(true);  
    }
    
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <div className={`active ${show && 'hidden'}   `}> 
   <div className='flex items-center py-[2vw] px-[4vw] bg-black text-white gap-[17vw]'>
    <div className='logo font-bold text-[1vw]'>Stock P Logo</div>
    <div className='mid'> <ul className='flex gap-[3vw]'>
        <li className='text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out delay-100'>Home</li>
        <li className='text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out delay-100'>Fetures</li>
        <li className='text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out delay-100'>Experties</li>
        <li className='text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out delay-100'>Blogs</li>
        <li className='text-gray-500 hover:text-white cursor-pointer transition-all ease-in-out delay-100'>Contacts Us</li>
    </ul></div>
    <div className='last flex gap-[5vw]'>
        <button className='px-6 py-1 border-[1px] border-white rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out delay-150'>Refer & Earn</button>
        <button className='px-4 py-1 bg-gray-900 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out delay-150'> Log In</button>
    </div>
   </div>
    </div>
  )
}

export default Navbar