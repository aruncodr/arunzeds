"use client"
import Link from 'next/link'
import React from 'react'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],
})
  /* Screen width code */
   let windowWidth;
   if(typeof window !== 'undefined'){
     windowWidth = window.innerWidth
  }
  console.log(windowWidth);
let getResume = "getResume";
let getCV = "getCV";
const [isMenuOpen, setIsMenuOpen] = useState(false)


function Header() {
  return (
    <div className='flex text-stone-700 justify-between pt-4 py-10 px-4 md:px-32'>

        <div className='flex tracking-widest'>
          <div className='text-[26px] font-semibold tracking-[0.07em'>az</div>
          <div className='text-3xl font-light text-teal-500 tracking-wide'>&lt;<span className={`${lato.className} font-normal text-[22px]`}>/</span>&gt;</div> 
        </div>

      <div className={`${lato.className} flex items-center text-[15px] font-medium`}>
      
          <div className='px-2 md:px-4'>About<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span></div>
          <div className='px-2 md:px-4'>Work<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span></div>
          <div className='px-2 md:px-4'>Blog<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span></div>
          <a href="./cv" target="_blank" rel="noopener noreferrer">
          <button className='ml-3 px-4 h-10 mx-auto border text-teal-500 border-teal-500 rounded-lg' type="button">
            <div className='flex'>
              <div> {windowWidth > 768 ? getResume : getCV }</div>
              <div className="font-semibold">&nbsp; (&nbsp; )</div>
            </div>
          </button></a>
        </div>
        
    </div>
  )
}

export default Header