'use client'
 import { useRouter } from 'next/navigation'
import Image from "next/image";
import PageContent from "./cv0/page";


export default function Home() {
  const router = useRouter()

  return (
<div className='bg-white flex flex-col'>
    <button className='h-64 w- bg-teal-500' type="button" onClick={() => router.push('./cv/')}>
      Show My CV
    </button>
    <button className='h-64 w- bg-blue-500' type="button" onClick={() => router.push('./cv0/')}>
      Show My CV
    </button>
</div>
  );
}
