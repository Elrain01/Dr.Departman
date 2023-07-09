import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className='grid grid-cols-3 gap-4 w-full'>
<p className='bg-red-600 p-4 col-span-2'>hi</p>
<p className='bg-red-600 p-4'>hi</p>
<p className='bg-red-600 p-4'>hi</p>
<p className='bg-red-600 p-4'>hi</p>
<p className='bg-red-600 p-4'>hi</p>
<p className='bg-red-600 p-4'>hi</p>
<p className='bg-red-600 p-4'>hi</p>

    </div>
    </div>









        
    
  )
}
