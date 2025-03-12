import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
<div className='tracking-wide text-[17px] pt-6 bg-[#111] text-white font-semibold'>
    <div className='flex gap-4 pl-4 lg:pl-0 items-end '>
    <h3 className='text-3xl lg:px-64 font-bold text-white'>Arunzeds</h3>
    </div>

    <div className='py-6  px-4 lg:px-64 font-medium'>
    <span className='font-bold'>Disclaimer:</span> The information provided on mothertravelspuducherry.com is for general informational 
            purposes only. While we strive to ensure that the content on our website is accurate and reliable, 
            we make no guarantees regarding its completeness, accuracy, or reliability. For specific advice or 
            concerns, we recommend consulting with a qualified professional in the relevant field.    
    </div>

    <div className='flex gap-12 pb-4 w-fit mx-auto px-4 lg:px-64'>
          <div className=''>
                <Link className='text-white' href='https://www.instagram.com/mother_motor'>
                  <svg  className="feather feather-instagram text-white " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
          </div>
          <div className=''>
                <Link className='text-white' href='https://pin.it/3IFlg6o0T'>
                  <Image className='text-white' src="/more/pinterest.svg" width="24" height="24" alt="Pinterest"/>
                </Link>
          </div>
          <div className=''>
                <Link className='text-white' target="_blank" rel="noopener noreferrer" href='mailto: azspecification@gmail.com'>
                  <svg className="feather feather-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </Link>
          </div>
          <div className=''>
                <Link className='text-white' target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/arunzeds'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
                    <path fill="#ffffff" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </Link>
          </div>
        </div>

    <hr/>
<div className='text-[15px] py-3 text-center text-white'>
        <Link href="/privacy">Privacy Policy</Link> &nbsp;|&nbsp; <Link href="/termsandconditions">Terms and Conditions</Link> &nbsp;|&nbsp; <Link href="/disclaimer">Disclaimer</Link> &nbsp;|&nbsp; <Link href="/about">About</Link> &nbsp;|&nbsp; <Link href="/contact">Contact us</Link>
        <div className='py-1'>&copy; 2025 Pondy Store. All rights reserved.</div>
</div>


</div>
  )
}