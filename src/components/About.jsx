import React from 'react';
import Image from 'next/image';
import AboutImg from '../../public/images/About.png';

const About = () => {
  const skills = [
    { name: 'UX', value: 90 },
    { name: 'Website Design', value: 90 },
    { name: 'App Design', value: 85 },
    { name: 'Graphic Design', value: 85 }
  ];

  return (
    <div id='about' className='flex flex-col lg:flex-row items-center mt-20 gap-12 justify-between'>
      <div className='flex flex-col gap-2 items-center'>
        <Image className='w-[46rem]' src={AboutImg} alt='' />
      </div>

      <div className='flex flex-col gap-3 p-3 lg:p-0'>
        <h1 className='font-bold text-[1.8rem] text-center lg:text-left'>About Me</h1>
        <p className='text-[0.9rem] text-center lg:text-left'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
        </p>
        <div className='space-y-4'>
          {skills.map((skill) => (
            <div key={skill.name} className='flex flex-col'>
              <label htmlFor={skill.name} className='mb-1'>{skill.name}:</label>
              <input
                id={skill.name}
                className='slider'
                type="range"
                min="1"
                max="100"
                value={skill.value}
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

