import React from 'react';
import Image from 'next/image';
import Graphic from '../../public/images/Graphic.png';
import UI from '../../public/images/UI.png';
import Web from '../../public/images/Web.png';
import App from '../../public/images/App.png';

const Services = () => {
  const services = [
    { icon: UI, name: 'UI/UX', desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" },
    { icon: Web, name: 'Website Design', desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" },
    { icon: App, name: 'App Design', desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" },
    { icon: Graphic, name: 'Graphic Design', desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" }
  ];

  return (
    <div id='services' className='mt-20 flex flex-col gap-5'>
      <h1 className='text-center font-bold text-[1.9rem]'>Services</h1>
      <p className='text-[0.9rem] w-[70%] mx-auto text-center'>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className='flex flex-col lg:flex-row gap-3 mt-4 p-2'>
        {services.map((item, index) => (
          <div key={index} className='flex flex-col bg-gray-100 gap-3 py-3 px-3 rounded-md text-sm'>
            <Image className='w-[5rem] h-[5rem] mx-auto lg:mx-0' src={item.icon} alt={item.name} />
            <h1 className='text-black font-bold px-2 text-[1.2rem] text-center lg:text-left'>{item.name}</h1>
            <p className='p-2 text-center lg:text-left text-black'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;




// Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum