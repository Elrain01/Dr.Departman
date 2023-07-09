import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='min-h-screen '>
      <Image className='fixed -z-10 w-full  object-cover' width='1200' height='800' src='/images/bg.jpg'/>

        <div className='flex justify-evenly items-center border border-gray-500
        px-4 py-4 '>
            <p>وروذ</p>
            <Image className='w-10 object-contain' width='100' height='100' src='/images/arrow.gif'/>
        </div>
    </div>
  )
}

export default Hero