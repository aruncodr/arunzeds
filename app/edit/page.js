import BlogsList from '@/components/BlogsList'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='px-4 lg:px-64 mt-10'>

        <div className='pb-4 flex justify-between items-center'>
          <Link className="bg-green-900 text-white p-2 px-6 rounded-lg" href={"/edit"}>
            Refresh
          </Link>
          <Link className="bg-green-900 text-white p-2 px-6 rounded-lg" href={"/addBlog"}>
            Add Blog
          </Link>
        </div>
        <BlogsList/>

        <div className='pt-4 flex justify-between items-center'>
          <Link className="bg-green-900 text-white p-2 px-6 rounded-lg" href={"/edit"}>
            Refresh
          </Link>
          <Link className="bg-green-900 text-white p-2 px-6 rounded-lg" href={"/addBlog"}>
            Add Blog
          </Link>
        </div>

    </div>
  )
}
