'use client'
 import { useRouter } from 'next/navigation'
import Image from "next/image";
import PageContent from "./cv/page";


export default function Home() {
  const router = useRouter()

  return (
<div>
  <div className=''>
    <button type="button" onClick={() => router.push('./cv/')}>
      Show My CV
    </button>
    </div>
</div>
  );
}
