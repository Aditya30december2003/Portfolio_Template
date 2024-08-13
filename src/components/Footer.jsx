import React from 'react'
import Image from 'next/image'
import Name from '../../public/images/name.png'
import { FaFacebook , FaTwitter , FaInstagram , FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-gray-200 text-black flex flex-col mt-32'>

      <div className='flex items-center w-[15%] mx-auto gap-4 pt-10'>
        <div>
          <Image className='w-[2.5rem]' src={Name} alt="" />
        </div>
        <div className='text-[1.33rem] text-center'>
          <span className='font-bold'>M</span>umair
        </div>
      </div>

      <div>
      <ul className='flex lg:flex-row flex-col items-center gap-4 text-[0.8rem] mx-auto w-[36%] mt-7'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About Me</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Projects</li>
          <li className='cursor-pointer'>Testimonials</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
      </div>

      <div>
            <ul className='flex items-center gap-4 w-[12%] mt-7 mx-auto'>
                <li className='cursor-pointer'><FaFacebook size={20}/></li>
                <li className='cursor-pointer'><FaTwitter size={20}/></li>
                <li className='cursor-pointer'><FaInstagram size={20}/></li>
                <li className='cursor-pointer'><FaLinkedin size={20}/></li>
            </ul>
        </div>

        <div className='bg-gray-800 text-white text-center p-4 mt-7'>
            <h1>© 2023 <span className='text-orange-500 text-[0.9rem] '>Mumair</span> All Rights Reserved , Inc.</h1>
        </div>

    </div>
  )
}

export default Footer
