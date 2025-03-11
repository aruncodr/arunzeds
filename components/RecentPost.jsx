import { getPost1 } from '@/utils/get-post1'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import RecentList from './RecentList';
import Script from 'next/script';

export default async function RecentPost( {red404}) {
    const {allpost} = await getPost1();
    // console.log(allpost.toSorted((e)=>{
    //     return e.type=="yes";
    // }));
    const selectedpost = allpost
    const bikespost = allpost.filter((e)=>{
        return e.type=="bikes";
    })
    const carspost = allpost.filter((e)=>{
        return e.type=="cars";
    })
    
  return (
    <div>
        <h2 className={`${red404} text-xl font-bold pl-4 lg:pl-0 pt-4 leading-5`} aria-label='recent posts'>Recent Posts</h2>
        <ul className='list-none'>
            {selectedpost.slice(0,5).map((e,index)=>{
                return(
                    <RecentList key={index} e={e}/>
                )
            })}
        </ul>

        <h2 className={`${red404} text-xl font-bold pl-4 lg:pl-0 pt-8 leading-5`} aria-label='recent posts'>Upcoming Bikes</h2>
        <ul className='list-none'>
            {bikespost.slice(0,5).map((e, index)=>{
                return(
                    <RecentList key={index} e={e}/>
                )
            })}
        </ul>

        <h2 className={`${red404} text-xl font-bold pl-4 lg:pl-0 pt-8 leading-5`} aria-label='recent posts'>Upcoming cars</h2>
        <ul className='list-none'>
            {carspost.slice(0,5).map((e, index)=>{
                return(
                    <RecentList key={index}  e={e}/>
                )
            })}
        </ul>

  </div>
  )
}
