import React from 'react'
import Project1 from '../../public/images/Project-1.png'
import Project2 from '../../public/images/Project-2.png'
import Project3 from '../../public/images/Project-3.png'
import Image from 'next/image'
const Projects = () => {
    const projects=[
    { icon: Project1, name: 'AirCalling Landing Page Design'},
    { icon: Project2, name: 'Business Landing Page Design'},
    { icon: Project3, name: 'Ecom Web Page Design'},
    ]
  return (
    <div id='projects' className='mt-20'>
      <h1 className='text-center text-[1.9rem] font-bold '>My Projects</h1>
      <p className='text-center text-[0.9rem] w-[95%] lg:w-[80%] mx-auto mt-5'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
      <div className='mt-7 text-[0.6rem]  text-black  lg:text-[0.9rem] flex item-center justify-between mx-auto w-[100%] lg:w-[70%] p-1'>
        <button className='bg-gray-200 text-black rounded-md border-2 px-3 py-1 border-gray-100/10'>All</button>
        <button className='bg-gray-200 text-black rounded-md border-2 px-3 py-1 border-gray-100/10'>UI/UX</button>
        <button className='bg-orange-500 text-white rounded-md px-3 py-1'>Web Design</button>
        <button className='bg-gray-200 text-black rounded-md border-2 px-3 py-1 border-gray-100/10'>App Design</button>
        <button className='bg-gray-200 text-black rounded-md border-2 px-3 py-1 border-gray-100/10'>Graphic Design</button>
      </div>

      <div className='flex flex-col lg:flex-row items-center w-full mt-3 gap-2'>
      {projects.map((item, index) => (
          <div key={index} className='flex flex-col items-center lg:items-start w-full gap-3 py-3 px-3 rounded-md text-sm'>
            <Image className='w-[20rem] lg:w-[17rem] h-[20rem]' src={item.icon} alt={item.name} />
            <h1 className='text-orange-500 px-2 text-[0.85rem]'>Web Design</h1>
            <p className='p-2 font-bold text-[1rem]'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

