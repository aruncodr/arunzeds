"use client"
import React, { useState } from 'react';
import { Urbanist } from "next/font/google";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const urban = Urbanist({
    weight: ['200','300','400','500','600','700','800','900'],
    subsets: ['latin'],
  })

  const Contact = () => {
    const [name, setName] = useState()
    const [mail, setMail] = useState()
    const [msg, setMsg] = useState()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              name, mail, msg
            })
          })
          console.log(await response.json())
        
    };
  
    return (
      <div className={` ${urban.className} bg-gray-100 text-gray-800 p-4 md:p-12`}>
        <div className="mt-12 max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6">Contact Us</h1>
          <div className='flex flex-row mx-auto gap-6 lg:pl-20 lg:gap-10 lg:px-12 justify-center'>
              <h2 className={`text-right leading-none font-semibold text-5xl lg:text-5xl lg:text-[76px]`}>
                      Arun Zed;<span className='text-[#007EB5]'></span>
              </h2>
              <div className={` lg:pt-4 text-left font-[400] text-base text-stone-700`}>
                      <span className="text-2xl lg:text-[44px] leading-2 lg:leading-[44px] font-light">I&apos;m a web developer based in India.</span>
              </div>
          </div>
          <p className="mb-4 pt-4">
            Have questions, feedback, or need assistance? We would love to hear from you! Fill out the form below, and our team will get back to you as soon as possible.
          </p>

          <div className='flex gap-12 w-fit mx-auto px-4 pt-4'>
          <div className=''>
                <Link className='text-black' href='https://www.instagram.com/mother_motor'>
                  <svg  className="feather feather-instagram text-black " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
          </div>
          <div className=''>
                <Link className='text-black' href='https://pin.it/3IFlg6o0T'>
                  <Image className='text-black' src="/more/pinterest-black.svg" width="24" height="24" alt="Pinterest"/>
                </Link>
          </div>
          <div className=''>
                <Link className='text-black' target="_blank" rel="noopener noreferrer" href='mailto: azspecification@gmail.com'>
                  <svg className="feather feather-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </Link>
          </div>
          <div className=''>
                <Link className='text-black' target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/arunzeds'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
                    <path fill="#000000" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </Link>
          </div>
        </div>

          <div className='pt-4 mx-auto px-4 lg:px-0 lg:w-[500px] items-center justify-center'>
        <h2 className='text-[32px] text-center font-semibold'>Send a message</h2>
        <form className='my-5 pb-20' onSubmit={handleSubmit}>
            <div className='flex items-center gap-10 lg:gap-14 lg:mb-8 lg:mt-6'>
                <div>Name</div>
                <input className='border rounded-lg pl-3 lg:pl-6 py-2 w-full outline-none' placeholder='Type your name'
                   onChange={(e) => setName(e.target.value)}
                   value={name} required/>
            </div>
            <div className='flex items-center gap-10 lg:gap-14 my-4 lg:my-8'>
                <div>Gmail</div>
                <input className='border rounded-lg pl-3 lg:pl-6 py-2 w-full outline-none' placeholder='user@mail.com'
                   onChange={(e) => setMail(e.target.value)}
                   value={mail} required/>
            </div>
            <div className='flex items-center gap-4 lg:gap-8 my-4 lg:my-8 mb-6'>
                <div>Message</div>
                <textarea className='border rounded-lg pl-3 lg:pl-6 py-2 w-full outline-none' placeholder='we love to read your message'
                   onChange={(e) => setMsg(e.target.value)}
                   value={msg}
                   rows="4" required/>
            </div>

            {loading ? 
          <button disabled
          className="flex gap-4 justify-center items-center modalButton w-full bg-[#92d0eb] font-semibold text-white py-3 rounded-md">
            <div className='animate-spin'>
                {/* <div className='text-2xl leading-none font-normal'>a</div> */}
                </div><div>Message send success !&nbsp;&nbsp;&nbsp;</div>
            </button>
          :
          <button type="submit"
          className="modalButton w-full bg-black font-bold text-white py-3 rounded-md"
          >Confirm booking</button>
          }
        </form>
      </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <ul className="list-none space-y-2">
              <li><strong>Email:</strong> <a href="mailto:azspecification@gmail.com" className="text-blue-500 underline">azspecification@gmail.com</a></li>
              <li><strong>Website:</strong> <a href="https://www.arunzeds.com/" className="text-blue-500 underline">https://www.arunzeds.com/</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  