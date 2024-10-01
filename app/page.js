"use client"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Header from './Header';
export default function Home() {
  const router = useRouter()

  return (
<div className=''>
    <div>
      <Header/>
    </div>
    <div className='flex'>
      <div className='leftside md:w-1/2 pt-32 pl-6 md:pl-24'>
          <div className='font-semibold text-6xl'>
            Hi, I'm Arun Zeds  
          </div>
          <div className='text-xl pt-4 md:pr-28'>
            Passionate full stack web developer dedicated to turning ideas into creative solutions.
          </div>
          <button className='h-12 mt-4 w-36 mx-auto bg-teal-500 text-white rounded-full' type="button" onClick={() => router.push('./cv/')}>
            Show My CV
          </button>

      </div>
      <div className='rightside w-1/2'>

      </div>
    </div>


</div>
  );
}
