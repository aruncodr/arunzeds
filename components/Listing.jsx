import React from 'react'
import { Roboto, Urbanist } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

const urban = Urbanist({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
})

export default async function Listing({selectedpost}) {
  
  return ( 
    <div  className='text-black pt-20 dark:text-white bg-gray-200 dark:bg-gray-800'>
        <h1 className='text-transparent hidden leading-6'>Mother Motor's{} </h1>

        {/* <h2 className={`${urban.className} font-bold  text-2xl mb-3.5 px-6 py-3 bg-white`}>Upcoming 2025 Models</h2> */}

      <div className='grid gird-cols-1 lg:grid-cols-3 lg:grid-flow-row gap-[26px] mx-auto pb-12 w-fit'>
        {selectedpost.map((e)=>{
          return(
            <div key={e.id} className={`${urban.className} bg-white shadow-sm dark:bg-slate-700 w-[380px]`}>
            <div className=''>
            {/* href={`/${e.type}/${e.route}`} */}
              <Link className='flex flex-col items-center' href={`/${e.type}/${e.route}`} alt={e.h1} title={e.h1} aria-label={`open page of ${e.h1}`}>
                  <div className='relative w-[382px] h-[230px]'>
                      <Image className='object-fill' 
                      src={e.img} fill 
                      alt={e.name} title={e.name}
                      sizes='100vw'
                      blurDataURL={e.img}
                      priority/>
                  </div>
                  <h2 className='twoline pl-4 pr-2 leading-8 text-[24px] pt-2.5 font-bold'>{e.h1}</h2>
              </Link>
              <time className='text-sm pl-4'>{format(parseISO(e.publishedAt), "LLLL d, yyyy")} by <span className='text-blue-600 dark:text-sky-400'>Arunzed</span></time>          
                  <p className='px-4 pt-4 pb-1 threeline text-base text-gray-500 font-medium dark:text-white tracking-wide '>{e?.desc} {e?.desc2} {e?.desc3}</p>
              </div>

              <div className='ml-4 mb-4 mt-3 flex gap-2 justify-between items-end'>
                <Link className='' href={`/${e.type}/${e.route}`} title={e.h1} alt={e.h1} aria-label={`read more of ${e.h1}`}>
                  <button className='bg-gray-600 text-nowrap dark:bg-white font-medium text-white dark:text-black text-base px-8 py-1.5 rounded-sm' alt={`Read more about ${e.h1} `} aria-label={`open page of ${e.h1}`} title={`Read more`}>
                    Read more</button>
                </Link>
                
                <Link href={`/search?query=${e?.name.slice(0,4)}`}>
                    <div className='pr-4 font-medium text-gray-500 dark:text-gray-300 text-[14px] pt-2 pb-1 oneline'># {e.name}</div>
                </Link>
              </div>
              
            </div>
          )
        })}
      </div>


    </div>
  )
}
