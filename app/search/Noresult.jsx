import RecentPost from '@/components/RecentPost'
import React from 'react'

export default function Noresult({query}) {
  return (
    <div className='text-center mx-auto w-fit px-36  py-12'>
        <h1 className='text-3xl mb-12 font-bold'>&quot;{query}&quot; your result is Not Matched</h1>
        {/* <h2 className='mt-16 font-semibold text-xl'>Keep Explore Our recent post</h2> */}
        <RecentPost/>
    </div>
  )
}
