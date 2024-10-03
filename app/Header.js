import Link from 'next/link'
import React from 'react'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],
})

function Header() {
  return (
    <div className='flex text-stone-700 justify-between py-6 px-4 md:px-20'>
        <div className='tracking-widest'>
        <span className='text-[26px] font-semibold tracking-[0.07em] '>AZ</span>
          <span className='text-4xl font-light text-teal-500 tracking-wide'>&lt;<span className={`${lato.className} font-normal text-[28px]`}>/</span>&gt;</span> 
        </div>

        <div className={`${lato.className} flex items-center text-base font-medium`}>
          <div className='px-2 md:px-4'>Work<span className='text-teal-500'>&nbsp; (&nbsp; )</span></div>
          <div className='px-2 md:px-4'>About<span className='text-teal-500'>&nbsp; (&nbsp; )</span></div>
          <div className='px-2 md:px-4'>Blog<span className='text-teal-500'>&nbsp; (&nbsp; )</span></div>
          <Link href="./cv">
          <button className='ml-3 h-10 w-36 text-[15px] mx-auto border border-teal-500 rounded-lg' type="button">
          <span className='text-teal-500'>getResume&nbsp; (&nbsp; )</span>
          </button></Link>



        </div>
        
    </div>
  )
}

export default Header