import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=''>
      <Image className=' w-full  object-cover' width='1200' height='800' src='/images/bg.jpg'/>
      <div className=' flex justify-center space-x-16 
          items-center border-2 border-sky-500 w-full  h-14 px-4 py-4'>
          <p className='text-xl' >ورود به ساختمان پزشکان</p>
           <Image className='w-10 object-contain' width='100' 
            height='100' src='/images/arrow.gif'/>
      </div>
      <div className='bg-slate-100 h-96 flex justify-center items-center'>
          <div class="grid grid-cols-3 ">
              <div className='bg-slate-50 col-span-2 h-60 flex  justify-center items-center'>
                  <Image className='w-4/6  border-2 border-sky-500  ' width='1200' height='800' 
                   src='/images/bgg.jpg'  />
              </div>
              <div className='bg-slate-300 w-10/12 h-60 flex justify-center items-center'>
                    <Image className='w-4/6 border-2 border-sky-500' 
                     width='100' height='100' src='/images/bg.jpg'  />

              </div>
          </div>
      </div>
           <div>

           </div>
           <p className=' h-20 py-4 p-6'>تجربه نوشدارویی از چشمه خرد و تکامل در ساختمانی که در قلب خودبه سوی این مقصود
            رهایی از بیماری حرکت میکند.</p>
           
           <p className=' h-20 py-4 p-6 text-xl'>پزشکان مجرب</p>
            <div class="grid grid-cols-3 gap-4 h-screen  ">
              
              <div className=' bg-slate-300'>
                <Image className='w-full h-full border-2 border-sky-500'
                width='100' height='20' src='/images/' />
                </div>
              <div className='bg-slate-400'>
                <Image className='w-full h-full border-2 border-sky-500'
                width='100' height='20' src='/images/' />
                </div>
              <div className='bg-slate-500'>
                <Image className='w-full h-full border-2 border-sky-500'
                width='100' height='20' src='/images/' />
                </div>
              <div className='bg-slate-600'>
                <Image className='w-full h-full border-2 border-sky-500'
                width='100' height='20' src='/images/' />
                </div>
              <div className='bg-slate-700'>
                <Image className='w-full h-full border-2 border-sky-500'
                width='100' height='20' src='/images/' />
                </div>
              <div className='bg-slate-800'>
                <Image className='w-full h-full border-2 border-sky-500'
                width='100' height='20' src='/images/' />
                </div>
            </div>
    </div>
  )
}

export default Hero