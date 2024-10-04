"use client"
import Link from 'next/link'
import Header from './Header';
import { Montserrat,Lato } from 'next/font/google'
import Image from 'next/image';
import getWork from './getWork/page';
const mont = Montserrat({ subsets: ['latin'],
   weight: ['100','300','400','500','600','700','900'],
})
const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],
})
export default function Home() {

  return (
<div className='bg-stone-50 text-stone-600 md:px-28'>
    <div>
      <Header/>
    </div>
    
    <div className='flex  h-[680px]'>
      <div className='md:w-1/2 pt-28 pl-12 md:pl-28'>
          <div className={`${lato.className} leading-none font-semibold text-5xl md:text-[76px]`}>
              Arun Zeds<span className='text-teal-500'>;</span>
          </div>
            {/* h1 - 7xl | h2 - xs | test - 14px */}
          <div className='leading-none tracking-widest text-[13px] text-stone-400 pt-2.5 font-semibold'>
              FULL STACK DEVELOPER&nbsp;<span className='text--teal-500'>|</span>&nbsp;PONDICHERRY, INDIA
          </div>
          <div className={`${lato.className} pt-1.5 pb-0.5 text-sm text-[0.905rem] font-[400] tracking-wider md:w-[360px]`}>           
            <div className='text-teal-500 pt-0.5 text--[14px] font-semibold'>
              Desc<snap className="font-semibold">&nbsp; (&nbsp; )</snap>
              <span className='text-teal-500 text--[14px] font-semibold'>&nbsp; &#123;</span>
            </div>
            <div className='leading-[22px] text-stone-500'>
              {/* Specialized in <span className='text-teal-500 font-normal'>Tailwind, Next js, App write</span> focused on creating efficient and user 
              friendly web solution. */}
              {/* Mostly work on <span className='text-teal-500 font-normal'>Tailwind, Next js, App write</span> focused on creating efficient and user 
              friendly website to my client.               */}
              <span className='text--teal-500 font-normal'>Tailwind, Next js, App write</span> to crafting innovative website with create user experience to my client.
              <div className='text-teal-500 text--[14px] font-semibold'>&#125;</div>
            </div>
          </div>
          <Link href="./cv">
            <button className='mt-2 h-10 w-36 text-[15px] mx-auto bg-teal-500 text-white rounded-lg'>
            getProject<snap className="font-semibold">&nbsp; (&nbsp; )</snap></button>
          </Link>
      </div>
      <div className='w-1/2'>

      </div>
    </div>

    {/* ----------------------WORK () page ---------------------- <span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span> */}
    <div className="mx-auto pb-20 px-12">
      <div className={`${lato.className} pl-8 pb-12 text--center text-3xl font-medium `}>
        Work<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span>
      </div>
      <div className='md:flex'>
        <div className="mx-auto p-5 w-[500px] bg-white rounded-2xl shadow-sm">
            <Image className="rounded-2xl h-[250px] object-cover object-top shadow-sm" src="/land1.png" width={500} height={500}></Image>
            <div className={`${mont.className} pt-4 text-xl text-stone-500 font-medium`}>
            MOTHER CAB BOOKING WEBSITE
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-600 tracking-wide`}>
            To book a cab taxi ride by selecting vechicle type, pickup and drop off location using Google API.
            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>

        <div className="mx-auto p-5 md:pt-8 w-[500px] bg-white rounded-2xl shadow-sm">
            <div className=''>
              <Image className="rounded-2xl h-[250px] object-cover object-top shadow-sm" src="/land2.png" width={500} height={500}></Image>
            </div>
            <div className={`${mont.className} pt-4 text-xl text-stone-500 font-medium`}>
              PONDICHERRY TORISIUM
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-500 tracking-wide`}>
            Explore Pondicherry Tourist Attraction spots and Assist travellers to making Decisions by offering reviews.
            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>

      </div>
      {/* ---------------- 2 FLEX ----------------- */}
    <div className='md:flex pt-12'>
      <div className="mx-auto p-5 w-[500px] bg-white rounded-2xl shadow-sm">
            <div className=''>
              <Image className="rounded-2xl h-[250px] object-cover object-top shadow-sm" src="/land3.png" width={500} height={500}></Image>
            </div>
            <div className={`${mont.className} pt-4 text-xl text-stone-500 font-medium`}>
              AZ MOBILE SPECIFICATION
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-500 tracking-wide`}>
            Indepth Technical Information on Mobile Phone, Offers extensive specifications like display, 
            processor, camera, battery and more.

            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>
        <div className="mx-auto p-5 md:pt-8 w-[500px] bg-white rounded-2xl shadow-sm">
            <div className=''>
              <Image className="rounded-2xl h-[250px] object-cover object-top shadow-sm" src="/land4.png" width={500} height={500}></Image>
            </div>
            <div className={`${mont.className} pt-4 text-xl text-stone-500 font-medium`}>
              PONDICHERRY TORISIUM
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-500 tracking-wide`}>
            Explore Pondicherry Tourist Attraction spots and Assist travellers to making Decisions by offering reviews.
            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>
      </div>

    </div>
    {/* --------------------- About () ------------------------- */}
    <div className='mx-auto pb-20 px-12'>
      <div className={`${lato.className} pl-8 pb-12 text--center text-3xl font-medium `}>
        About<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span>
      </div>
    </div>


</div>
  );
}
