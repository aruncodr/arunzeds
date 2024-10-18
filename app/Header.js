"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Lato,Raleway } from 'next/font/google'
  /* Screen width code */
  let windowWidth;
  if(typeof window !== 'undefined'){
    windowWidth = window.innerWidth
 }
 console.log(windowWidth);
let getResume = "getResume";
let getCV = "getCV";
const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],
})
const rale = Raleway({ subsets: ['latin'],
  weight: ['100','300','400','500','600','700','900'],
})
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='flex text-stone-700 justify-between pt-2 lg:pt-4 px-4 lg:pl-32 lg:pr-24'>
        <div className='flex tracking-widest'>
          <div className='text-[26px] font-semibold tracking-[0.07em'>az</div>
          <div className='text-3xl font-light text-teal-500 tracking-wide'>&lt;<span className={`${lato.className} font-normal text-[22px]`}>/</span>&gt;</div>

        </div>

      <div className='flex text-sm items-center'>

      {/* <a href="./cv" target="_blank" rel="noopener noreferrer">
          <button className='ml-3 mr-3 lg:mr-0 px-3 lg:px-4 py-0.5 text-[13px] font-medium lg:text-md lg:p-1 lg:h-10 mx-auto border-[0.08em]
           text-teal-500 border-teal-500 rounded-md lg:rounded-lg' type="button">
            <div className='flex'>
              <div> {windowWidth > 768 ? getResume : getCV }</div>
              <div className="font-semibold">&nbsp; (&nbsp; )</div>
            </div>
          </button></a> */}

        <button className='md:hidden'
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
          <path fill="#44403c" d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"></path>
        </svg>

        </button>

        <ul role="list" className='absolute hidden lg:flex top-16 ht-16 right-16 font-medium flex-col items-center justify-center text-[16px]'>
          <li className=' hidden lg:flex pt-24 px-2 md:px-4'>About         <span className='text-teal-500 font-bold'>&nbsp; (&nbsp; )</span></li>
          <li className=' hidden lg:flex pt-24 px-2 md:px-4'>Work          <span className='text-teal-500 font-bold'>&nbsp; (&nbsp; )</span></li>
          <li className=' hidden lg:flex pt-24 px-2 md:px-4'>Blog          <span className='text-teal-500 font-bold'>&nbsp; (&nbsp; )</span></li >
          <li className=' hidden lg:flex pt-24 px-2 md:px-4 pb-6'>getResume<span className='text-teal-500 font-bold'>&nbsp; (&nbsp; )</span></li>
        </ul>

        <div className={`absolute top-24 lg:right-0 w-full lg:w-[400px] bg-white
          flex flex-col items-center gap-6 font-meidum lg:font-semibold text-[15px] lg:text-lg transform transition-transform 
          ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
            <li className='list-none pt-6 px-2 md:px-4'>About<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span></li>
            <li className='list-none pt-4 px-2 md:px-4'>Work<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span></li>
            <li className='list-none pt-4 px-2 md:px-4'>Blog<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span></li>
            <li className='list-none pt-4 px-2 md:px-4 pb-6'>getResume<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span></li>
        </div>
      </div>
    </div>



  )
}

export default Header