import Listing from '@/components/Listing'
import { getPost1 } from '@/utils/get-post1'
import React from 'react'

export async function generateMetadata() {
  return {
    title: "Upcoming New Bikes Model list",
  }
}
export default async function page() {
    const {allpost} = await getPost1();
    const selectedpost = allpost.filter((e)=>{
        return (e.type=="scooters");
    })
    
  return (
    <div>
          <Listing selectedpost={selectedpost}/>
    </div>
  )
}
