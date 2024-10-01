import React from 'react'

function Header() {
  return (
    <div className='flex justify-between py-4 px-4 md:px-12 text-teal-500'>
        <div className=''>
          <span className='text-4xl font-semibold tracking-widest'>&gt;</span> 
          <span className='text-[26px] text-black font-semibold tracking-wider'>AZ</span>
          <span className='text-4xl font-semibold'></span> 
        </div>
        <div className='flex text-base font-medium pt-2'>
          <div className='px-2 md:px-4'>Work</div>
          <div className='px-2 md:px-4'>About</div>
        </div>
        
    </div>
  )
}

export default Header