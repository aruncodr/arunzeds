import React from 'react'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],

})

function PageContent() {
  return (
    <div className='bg-white text-gray-700 pt-8 w-full h-[842px]'>
      <div className='leading-[60px]'>
        <div className='text-[#666666] font-light text-center text-[54px]'>Arunkumar</div>
        <div className='text-[#666666] leading-6 text-center text-lg'>
           <div className={lato.className}>arunzeds.com | github/aruncodr<br />97867 87507 | arunzeds@gmail.com</div>
        </div>
      </div>
      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className='grid grid-cols-3 px-12'>
        <div>First</div>
        <div className='col-span-2'>
          <h1 className='text-[#6A6A6A] text-3xl font-normal'>SKILLS</h1></div>
          - **Front-end:** Tailwind, JavaScript and React.
          - **Back-end:** node.js, SQL databases (Mongo db)
          - **Others:** Attentive to UI/UX details and high quality. Flow on Figma and Adobe Illustator. Fan of Github.

      </div>



    </div>
  )
}

export default PageContent