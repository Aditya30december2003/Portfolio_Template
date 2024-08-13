import React from 'react'

const ContactForm = () => {
  return (
    <div id='contact' className='mb-3 mt-20'>
      <h1 className='text-center font-bold text-[1.9rem] '>Lets Design Together</h1>
      <p className='mt-4 text-[0.75rem] w-[70%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      <div className='flex flex-col lg:flex-row gap-3 w-[65%] mx-auto mt-7 '>
        <input className='outline-0 p-2 w-[100%] lg:w-[65%] border-2 border-black rounded-md bg-gray-200 px-2 text-[0.8rem]' type="text" placeholder='Enter your Email' />
        <button className='bg-orange-500 rounded-md text-[0.8rem] text-white px-7 py-2'>Contact Me</button>
      </div>
    </div>
  )
}

export default ContactForm
