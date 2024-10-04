"use client"
import Link from 'next/link'
import Header from './Header';
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],

})
export default function Home() {

  return (
<div className='bg-stone-50 h-[1098px] text-stone-600'>
    <div>
      <Header/>
    </div>
    
    <div className='flex '>
      <div className='md:w-1/2 pt-28 pl-12 md:pl-44'>


          <div className={`${lato.className} leading-none font-semibold text-[76px]`}>
            Arun Zeds<span className='text-teal-500'>;</span></div>

            {/* h1 - 7xl | h2 - xs | test - 14px */}
            <div className='leading-none tracking-widest text-[13px] text-stone-400 pt-2.5 font-semibold'>
              FULL STACK DEVELOPER&nbsp;<span className='text--teal-500'>|</span>&nbsp;PONDICHERRY, INDIA
            </div>

          <div className={`${lato.className} pt-1.5 pb-0.5 text-sm text-[0.905rem] font-[400] tracking-wider md:w-[360px]`}>
            
            <div className='text-teal-500 pt-0.5 text--[14px] font-semibold'>
              Desc<snap className="font-semibold">&nbsp; (&nbsp; )</snap>
              <span className='text-teal-500 text--[14px] font-semibold'>&nbsp; &#123;</span>
            </div>
            <div className='leading-[22px] text-stone-600'>
              Specialized in <span className='text-teal-500 font-normal'>Tailwind, Next js, App write</span> focused on creating efficient and user 
              friendly web solution.
              <div className='text-teal-500 text--[14px] font-semibold'>&#125;</div>
            </div>

          </div>



          <Link href="./cv">
          <button className='mt-2 h-10 w-36 text-[15px] mx-auto bg-teal-500 text-white rounded-lg'>
            getProject<snap className="font-semibold">&nbsp; (&nbsp; )</snap>
          </button></Link>

      </div>
      <div className='w-1/2'>

      </div>
    </div>


</div>
  );
}
