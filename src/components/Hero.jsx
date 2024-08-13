import React from 'react'
import Image from 'next/image'
import HeroImg from '../../public/images/Hero1.png'
import { FaFacebook , FaTwitter , FaInstagram , FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <div  id='hero' className='flex-col lg:flex-row flex items-center'>
      {/* left */}
      <div className='mt-10'>
        <p className='text-[0.85rem] font-bold text-center lg:text-left'>Hi I am</p>
        <h1 className='text-orange-500 font-bold text-[1.3rem] text-center lg:text-left'>Muhammad Umair</h1>
        <div className='text-[3rem] font-bold text-center lg:text-left'>
        <div className='flex  flex-col '> <span>UI & UX</span> <span><span className='text-white hidden'> kgjjbk </span> <span className='w-full lg:px-28'>Designer</span></span>  </div>
        </div>
        <p className='text-[0.94rem] mt-2 lg:w-[78%] text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <div className='text-center lg:text-left'>
        <button className='mt-7 lg:mt-3 mx-auto bg-orange-500 text-white rounded-md text-[0.9rem] px-10 py-2'>Hire Me </button>
        </div>
      </div>
      {/* right */}
      <div className='flex flex-col gap-2 items-center'>
        <Image className='w-[46rem]' src={HeroImg} alt='' />
        <div>
            <ul className='flex items-center gap-4'>
                <li className='cursor-pointer'><FaFacebook size={20}/></li>
                <li className='cursor-pointer'><FaTwitter size={20}/></li>
                <li className='cursor-pointer'><FaInstagram size={20}/></li>
                <li className='cursor-pointer'><FaLinkedin size={20}/></li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Hero
