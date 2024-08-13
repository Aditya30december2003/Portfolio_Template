"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Name from '../../public/images/name.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useParams } from 'next/navigation';
const Navbar = () => {
  const [nav , setNav] = useState(false)
  const [mode , setMode] = useState(true)
  const onNav = ()=>{
    {mode ? (document.body.style.backgroundColor = "black" ,document.body.style.color = "white"  ) : (document.body.style.backgroundColor = "white" , document.body.style.color = "black" ) }
    setMode(!mode);
}
  return (
    <>
    <div className='flex items-center justify-between py-3'>
      <div className='flex items-center'>
        <div>
          <Image className='w-[2.5rem]' src={Name} alt="" />
        </div>
        <div className='text-[1.3rem]'>
          <span className='font-bold'>M</span>umair
        </div>
      </div>
      <div className='hidden lg:block'>
        <ul className='flex items-center gap-4 text-[0.8rem]'>
          <a href='#hero'  className='cursor-pointer'>Home</a>
          <a href='#about'  className='cursor-pointer'>About Me</a>
          <a href='#services' className='cursor-pointer'>Services</a>
          <a href='#projects' className='cursor-pointer'>Projects</a>
          <a href='#test' className='cursor-pointer'>Testimonials</a>
          <a href='#contact' className='cursor-pointer'>Contact</a>
          <a href='' className='bg-orange-500 text-[0.8rem] text-white p-1 rounded-sm cursor-pointer'>Download CV</a>
          <div className='cursor-pointer' onClick={onNav}>{ !mode?<GoSun size={20}/>:<FaMoon size={20}/> }</div>
        </ul>
      </div>
      <div className='block lg:hidden'><GiHamburgerMenu onClick={()=>setNav(!nav)} className='cursor-pointer' size={25} /></div>
    </div>

    <div className={nav ?'text-center z-10 w-full h-full fixed top-0 left-0 font-bold duration-700 bg-white text-black' : 'z-10 text-center bg-white w-full h-full text-black fixed left-[-100%]   font-bold duration-700'}>
      <div><IoMdClose onClick={()=>setNav(!nav)} className='ml-[90%] mt-2 cursor-pointer' size={30}/></div>
        <ul className='flex flex-col  items-center gap-4 text-[1.5rem] mt-10'>
          <a href='#hero' className='cursor-pointer'>Home</a>
          <a href='#about' className='cursor-pointer'>About Me</a>
          <a href='#services' className='cursor-pointer'>Services</a>
          <a href='#projects' className='cursor-pointer'>Projects</a>
          <a href='#test' className='cursor-pointer'>Testimonials</a>
          <a href='#contact' className='cursor-pointer'>Contact</a>
          <a href='' className='bg-orange-500 text-[1.3rem] text-white p-1 rounded-sm cursor-pointer'>Download CV</a>
          <div className='cursor-pointer' onClick={onNav}>{ !mode?<GoSun size={25}/>:<FaMoon size={25}/> }</div>
        </ul>
    </div>
    </>
  )
}



export default Navbar
