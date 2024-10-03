"use client"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Header from './Header';
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],

})
export default function Home() {
  const router = useRouter()

  return (
<div className=''>
    <div>
      <Header/>
    </div>
    
    <div className='flex text-stone-700'>
      <div className='leftside md:w-1/2 pt-28 pl-12 md:pl-44'>
          <div className={`font-medium tracking-wider text-stone-400 `}>
            <span className={`${lato.className} leading-none`}>/*&nbsp; Fullstack Developer &nbsp;*/</span></div>
          <div className={`${lato.className} font-semibold text-7xl`}>
            Arun Zeds<span className='text-teal-500'>;</span></div>
          <div className={`${lato.className} pt-2 text-stone-400 text-[13px]`}>
            <div className='font-medium tracking-widest'>PONDICHERRY, INDIA.</div>  
          </div>
          <div className='pt-2 text-[15px] font-light tracking-wider md:pr-[200px]'><span className={`${lato.className}`}>
            Full Stack Web Developer, specialized in <span className='text-teal-500 font-medium'>Next js, Tailwind, Appwrite</span> focused on creating efficient and user friendly web solution.</span>
          </div>
          <button className='mt-4 h-10 w-36 text-[15px] mx-auto bg-teal-500 text-white rounded-lg' type="button" onClick={() => router.push('./cv/')}>
            getProject&nbsp; (&nbsp; )
          </button>

      </div>
      <div className='rightside w-1/2'>

      </div>
    </div>


</div>
  );
}
