import React from 'react';
import Image from 'next/image';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full '>
         <div className='flex justify-between h-14
  bg-[#0e113452] w-full items-center px-[2%]'>
     <div className='flex space-x-2 items-center'>
         <Image className='w-10 object-contain' width='100' height='100' src='/images/logo.png'/>
         <p>logo</p>
     </div>
     <div>
     <BiMenuAltRight className='text-3xl'/>
     </div>
 </div>
    </div>
   
   
   
   
   
   
   
   
   )
   
   
   
}

export default Header;