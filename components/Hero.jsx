import Listing from '@/components/Listing'
import { getPost1 } from '@/utils/get-post1'
import Form from 'next/form';
import React, { Suspense } from 'react'
import ListHero from './ListHero';
import SearchPage from '@/app/newpage/page';
import HeroShow from '@/app/newpage/HeroShow';

export default async function Hero() {
    const {allpost} = await getPost1();
    const selectedpost = allpost
    var me = 1;
    
  return (
    <div className='dark:bg-gray-800 bg-[#F7F8F9]'>
        <Suspense>
          {/* <ListHero selectedpost={selectedpost}/> */}
          <HeroShow />
        </Suspense>
        {/* <Form action="/newpage">
          <div name="au" className="flex gap-6 mx-auto w-fit py-12">
            <input className='hidden' defaultValue={me} name="page" />
            <div className="bg-gray-600 text-white text-[15px] px-4 rounded--md py-1.5 font-semibold select-none cursor-pointer">
              Back
            </div>
            <div className="text-2xl leading-none"></div>
            <button type='submit' className="bg-gray-600 text-white text-[15px] px-4 rounded--md py-1.5 font-semibold">
              Next
            </button>
          </div>
        </Form> */}
    </div>
  )
}
