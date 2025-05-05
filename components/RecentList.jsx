import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecentList({e}) {
  return (
    <li className='max-sm:pl-4'>
        <div className='grid grid-cols-4 items-center pt-3'  >
            <div className='relative h-[60px]'>
            <Image className='object-cover rounded-lg' alt={e.name} title={e.name}
              // priority
              placeholder='blur'  blurDataURL={e?.img}
              fill
              src={e?.img}
              sizes='100vw'
              />
            </div>
            <Link href={`/${e.type}/${e.route}`} title={e.name} aria-label={e.name} alt={e.name}
            className='col-span-3 text-[17px] font-semibold twoline px-3 w-full'>{e?.h1}</Link>

        </div>
    </li>
  )
}
