import React from 'react'
import { Lato } from 'next/font/google'
import Link from 'next/link'

const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],
})

function PageContent() {
  return (
    <div>

    <div  className='bg-white mx-auto text-gray-800 pt-20 w-[794px] h-[1122px]'>
      <div className='leading-[52px]'>
        <div className='text-[#666666] font-light text-center text-[48px]'>Arunkumar</div>
        <div className='text-[#666666] leading-[18px] text-center text-[16px]'>
           <div className={lato.className}>
           <a target="_blank" rel="noopener noreferrer" href='https://arunzeds.com/arunzeds'>arunzeds.com</a> &nbsp;|&nbsp; 
           <a target="_blank" rel="noopener noreferrer" href='https://github.com/aruncodr'>github/aruncodr</a><br />
           <span className='text-[14px] leading-6'><a href='tel:+919092131783'>9786787507</a></span> &nbsp;|&nbsp; 
           <a target="_blank" rel="noopener noreferrer" href='mailto: arunzeds@gmail.com'>arunzeds@gmail.com</a></div>
        </div>
      </div>
      <div className="h-[1px] mt-2 bg-gray-400 border-[] border-gray-400 dark:bg-gray-400" ></div>

      <div className='grid grid-cols-3 pt-1 px-10 '>
      <div className='pr-8 leading-none FIRSTSECTION'>
        {/* ------------ LINK ------------ */}
        <div>
            <h1 className={` ${lato.className} leading-none text-[#525659] text-2xl pt-3 font-light`}>LINKS</h1>
            <h2 className='leading-none pt-2 font-semibold text-sm'>
              <span className='leading-none font-bold'>ABOUT</span> &nbsp;|&nbsp; 
              P<span className='leading-none text-xs'>ORTFOLIO</span>
            </h2>
            <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}><a target="_blank" rel="noopener noreferrer" href='https://arunzeds.com/arunzeds'>arunzeds.com/arunzeds</a></p>
            <h2 className='leading-none pt-2 font-semibold text-sm'>
               <span className='leading-none font-bold'>RESUME</span> &nbsp;|&nbsp; 
               CV<span className='leading-none text-xs'></span>
            </h2>
            <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}><a target="_blank" rel="noopener noreferrer" href='https://arunzeds.com/cv'>arunzeds.com/cv</a></p>
            <h2 className='leading-none pt-2 font-semibold text-sm'>
               <span className='leading-none font-bold'>PROFILE</span>
            </h2>
            <p className='leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light'>
            <span className={lato.className}><a target="_blank" rel="noopener noreferrer" href='https://in.pinterest.com/aruncodr/'>Pintest/arunzeds</a></span><br />
            <span className={lato.className}><a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/arunzeds'>Linked.in/arunzeds</a></span><br />
            <span className={lato.className}><a target="_blank" rel="noopener noreferrer" href='https://github.com/aruncodr'>github/aruncodr</a></span><br />
            </p>
            <h2 className='leading-none pt-2 font-semibold text-sm'>
               <span className='leading-none font-bold'>CONTACT</span>
            </h2>
            <p className='leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light'>
            <span className={lato.className}><a href='tel:+919092131783'>9786787507</a></span><br />
            <span className={lato.className}><a target="_blank" rel="noopener noreferrer" href='https://maps.app.goo.gl/irQF5WG2HxAkpNno9'>Pondicherry</a></span><br />
            <span className={lato.className}><a target="_blank" rel="noopener noreferrer" href='mailto: arunzeds@gmail.com'>arunzeds@gmail.com</a>
            </span><br />
            </p>
      </div>
      {/* ----------------- OTHER PERKS -------------- */}
      <div>
          <h1 className={` ${lato.className} leading-none text-[#525659] text-2xl pt-3 font-light`}>OTHER PERKS</h1>
          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>FOCUS</span> &nbsp;|&nbsp; 
            L<span className='leading-none text-xs'>EARNING </span>
          </h2>
          <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}>Continue Focusing on Full-Stack Development and DevOps.</p>
          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>COMMUNICATE</span> &nbsp;|&nbsp; 
            L<span className='leading-none text-xs'>ANGUAGES</span>
          </h2>
          <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}>Speaks Native Tamil, Conversational English.</p>
          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>MORE</span> &nbsp;|&nbsp; 
            F<span className='leading-none text-xs'>REE </span>
            T<span className='leading-none text-xs'>IME</span>
          </h2>
          <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}>To Blog, Travel, take Photo graphs, and Explore Men&apos;s Lifestyles.</p>
      </div>
        {/* -------------------- MORE ---------------- */}
      <div>
          <h1 className={` ${lato.className} leading-none text-[#525659] text-2xl pt-3 font-light`}>MORE</h1>
          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>CRAFTS</span> &nbsp;|&nbsp; 
            P<span className='leading-none text-xs '>ROJECTS</span>
            <div className='pt-1.5 text-[#666666] text-[13px]'>
            R<span className='text-[12px]'>ESUME </span>
            B<span className='text-[12px]'>UILDER</span></div>
          </h2>
          <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}>Our website helps users create and customize professional resumes, enhancing their job prospects.</p>
          <h2 className='leading-none pt-2 font-semibold text-sm'>
          <div className='text-[#666666] text-[13px]'>
            3<span className='text-[12px]'>D </span>
            P<span className='text-[12px]'>ORTFOLIO - </span>
            T<span className='text-[12px]'>hree JS</span></div>
          </h2>
          <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}>A 3D Portfolio is an interactive, three-dimensional digital showcase of my projects.</p>
      </div>
    </div>
    {/* **************************** Second column ************************************* */}
    <div className='col-span-2 pl-4 pr-2'>
      {/* ------------------SKILLS---------------- */}
      <div>
          <h1 className={` ${lato.className} leading-none text-[#525659] text-2xl pt-3 font-light`}>SKILLS</h1>
          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>FRONT </span>
            <span className='leading-none font-bold'>END</span> &nbsp;|&nbsp; 
            L<span className='leading-none text-xs'>IBRARIES </span>
          </h2>
          <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}>Tailwind, JavaScript, React, Next JS</p>
          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>TECH</span> &nbsp;|&nbsp; 
            D<span className='leading-none text-xs'>ESIGNING </span> &nbsp;|&nbsp; 
            T<span className='leading-none text-xs'>OOLS</span>
          </h2>
          <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}>Attentive to UI/UX details and high quality.<br />Flow on Figma and Adobe Illustator.
          <br />Backend with Mongo DB. Fan of Github.<br />Hands on Search engine optimization.</p>
      </div>
      {/* ----------------- EDUCATION -------------- */}
      <div>
          <h1 className={` ${lato.className} leading-none text-[#525659] text-2xl pt-3 font-light`}>EDUCATION</h1>
          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>UNDER GRADUATE</span> &nbsp;|&nbsp; 
            C<span className='leading-none text-xs'>OMPUTER </span>
            S<span className='leading-none text-xs'>CIENCE</span><br />
          </h2>
          <div className='leading-none pt-1.5 text-[#666666] tracking-wide text-[13px] font-medium'>Bachelor of Computer Applications - B.C.A</div>
          <p className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`}>Sri Aravindar Arts and Science College<br />College in Tamil Nadu</p>
      </div>
      {/* ---------------PROJECT EXPERIENCE------------ */}
      <div>
          <h1 className={` ${lato.className} leading-none text-[#525659] text-2xl pt-3 font-light`}>PROJECT EXPERIENCE</h1>
          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>MOTHER CABS</span> &nbsp;|&nbsp; 
            C<span className='leading-none text-xs'>AB </span>
            B<span className='leading-none text-xs'>OOKING</span> &nbsp;|&nbsp; 
            G<span className='leading-none text-xs'>OOGLE </span>
            A<span className='leading-none text-xs'>PI</span>
          </h2>
          <h3 className={` ${lato.className} leading-none pb-0.5 pt-1.5 text-[#666666] tracking-wide text-[13px] font-medium`}>
          {/* <a target="_blank" rel="noopener noreferrer" href='https://mothercabs.com/'>mothercabs.com</a> &nbsp;|&nbsp;  */}
          Tailwind &nbsp;|&nbsp; React js &nbsp;|&nbsp; Next JS &nbsp;|&nbsp; Mongo DB</h3>
          <ul role="list" className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light marker:text-[#666666] list-disc pl-5 pr-1 space-y-0.5`}>
            <li>A Cab Booking System is essentially an online platform where users can request a taxi ride by selecting their desired vehicle type, 
                input ting their pickup and drop-off locations.</li>
            
            <li>Providing features like estimated fare calculation, allowing custo mers to easily schedule trips and receive updates on 
                their ride status.</li>
            <li> The system automatically notify to my client authorized drivers to pick them up.</li>
          </ul>

          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>AZ SPECS</span> &nbsp;|&nbsp; 
            M<span className='leading-none text-xs'>OBILE </span>
            S<span className='leading-none text-xs'>PECIFICATION </span>
            W<span className='leading-none text-xs'>EBSITE</span>
          </h2>
          <h3 className={` ${lato.className} leading-none pb-0.5 pt-1.5 text-[#666666] tracking-wide text-[13px] font-medium`}>
          {/* <a target="_blank" rel="noopener noreferrer" href='https://azspecs.com/'>azspecs.com</a> &nbsp;|&nbsp;  */}
          Tailwind &nbsp;|&nbsp; React js &nbsp;|&nbsp; Next JS</h3>
          <ul role="list" className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light marker:text-[#666666] list-disc pl-5 pr-1 space-y-0.5`}>
            <li>AZ Spces is newly recognized as one of the top resources for in-depth technical information on mobile phones.</li>
            <li>The site offers extensive specifications and comparisons across a large database of smartphone models, covering aspects 
                like display, processor, camera, battery, and other hardware components.</li>
          </ul>

          <h2 className='leading-none pt-2 font-semibold text-sm'>
            <span className='leading-none font-bold'>PONDY STORE</span> &nbsp;|&nbsp; 
            E<span className='leading-none text-xs'>XPLORE </span>
            P<span className='leading-none text-xs'>ONDICHERRY</span> &nbsp;|&nbsp; 
            T<span className='leading-none text-xs'>OURISM</span> &nbsp;|&nbsp; 
            S<span className='leading-none text-xs'>HOPPING</span>
          </h2>
          <h3 className={` ${lato.className} leading-none pb-0.5 pt-1.5 text-[#666666] tracking-wide text-[13px] font-medium`}>
          {/* <a target="_blank" rel="noopener noreferrer" href='https://pondystore.com/'>pondystore.com</a> &nbsp;|&nbsp;  */}
          Tailwind &nbsp;|&nbsp; React js &nbsp;|&nbsp; Next JS</h3>
          <ul role="list" className={` ${lato.className} leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light marker:text-[#666666] list-disc pl-5 pr-1 space-y-0.5`}>
            <li>Pondystore is a concept designed to explore the tourist attractions and top shopping spots in Pondicherry. </li>
            <li>My website assists travelers in making informed decisions by offering reviews, price comparisons, and offering services.</li>
          </ul>
      </div>

    </div>
    </div>
  </div>

<div className='border rounded-lg border-gray-600 mb-12 py-2 px-6 w-fit mx-auto'>
  <Link className='text-gray-600 flex gap-2 items-center justify-center font-medium' 
    href='/cv/arun_cv.pdf'
    target='_blank'
    alt='my cv'
    rel='noopener noreferrer'
    >
    <svg className="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
    </svg>
      Download CV
  </Link>
</div>
<div className='w-[794px] text-sm mx-auto mb-8'>
  <div className='border mt-2 overflow-scroll h-[500px] rounded-lg text-[#ffffff] bg-[#121212]'>
        <div className='py-2 px-4  rounded-t-lg bg-gray-600 text-gray-300 '>Source code</div>
        <div className='py-2 px-4'>
<pre><code>

<br></br>import React from 'react'
<br></br>import &#123; Lato &#125; from 'next/font/google'
<br></br>import Link from 'next/link'
<br></br>
<br></br>const lato = Lato(&#123; subsets: ['latin'],
<br></br>  weight: ['100','300','400','700','900'],
<br></br>  &#125;)
<br></br>
<br></br>export default function PageContent() &#123;
<br></br>  return (
<br></br>&lt;div  className='bg-white mx-auto text-gray-800 pt-20 w-[794px] h-[1122px]'&gt;
<br></br>  &lt;div className='leading-[52px]'&gt;
<br></br>    &lt;div className='text-[#666666] font-light text-center text-[48px]'&gt;Arunkumar&lt;/div&gt;
<br></br>    &lt;div className='text-[#666666] leading-[18px] text-center text-[16px]'&gt;
<br></br>       &lt;div className=&#123;lato.className&#125;&gt;
<br></br>       &lt;a target="_blank" rel="noopener noreferrer" href='https://arunzeds.com/arunzeds'&gt;arunzeds.com&lt;/a&gt; &nbsp;|&nbsp; 
<br></br>       &lt;a target="_blank" rel="noopener noreferrer" href='https://github.com/aruncodr'&gt;github/aruncodr&lt;/a&gt;&lt;br /&gt;
<br></br>       &lt;span className='text-[14px] leading-6'&gt;&lt;a href='tel:+919092131783'&gt;9786787507&lt;/a&gt;&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>       &lt;a target="_blank" rel="noopener noreferrer" href='mailto: arunzeds@gmail.com'&gt;arunzeds@gmail.com&lt;/a&gt;&lt;/div&gt;
<br></br>    &lt;/div&gt;
<br></br>  &lt;/div&gt;
<br></br>  &lt;div className="h-[1px] mt-2 bg-gray-400 border-[] border-gray-400 dark:bg-gray-400" &gt;&lt;/div&gt;
<br></br>
<br></br>  &lt;div className='grid grid-cols-3 pt-1 px-10 '&gt;
<br></br>  &lt;div className='pr-8 leading-none FIRSTSECTION'&gt;
<br></br>    &#123;/* ------------ LINK ------------ */&#125;
<br></br>    &lt;div&gt;
<br></br>        &lt;h1 className=&#123;` $&#123;lato.className&#125; leading-none text-[#525659] text-2xl pt-3 font-light`&#125;&gt;LINKS&lt;/h1&gt;
<br></br>        &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>          &lt;span className='leading-none font-bold'&gt;ABOUT&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>          P&lt;span className='leading-none text-xs'&gt;ORTFOLIO&lt;/span&gt;
<br></br>        &lt;/h2&gt;
<br></br>        &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;&lt;a target="_blank" rel="noopener noreferrer" href='https://arunzeds.com/arunzeds'&gt;arunzeds.com/arunzeds&lt;/a&gt;&lt;/p&gt;
<br></br>        &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>           &lt;span className='leading-none font-bold'&gt;RESUME&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>           CV&lt;span className='leading-none text-xs'&gt;&lt;/span&gt;
<br></br>        &lt;/h2&gt;
<br></br>        &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;&lt;a target="_blank" rel="noopener noreferrer" href='https://arunzeds.com/cv'&gt;arunzeds.com/cv&lt;/a&gt;&lt;/p&gt;
<br></br>        &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>           &lt;span className='leading-none font-bold'&gt;PROFILE&lt;/span&gt;
<br></br>        &lt;/h2&gt;
<br></br>        &lt;p className='leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light'&gt;
<br></br>        &lt;span className=&#123;lato.className&#125;&gt;&lt;a target="_blank" rel="noopener noreferrer" href='https://in.pinterest.com/aruncodr/'&gt;Pintest/arunzeds&lt;/a&gt;&lt;/span&gt;&lt;br /&gt;
<br></br>        &lt;span className=&#123;lato.className&#125;&gt;&lt;a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/arunzeds'&gt;Linked.in/arunzeds&lt;/a&gt;&lt;/span&gt;&lt;br /&gt;
<br></br>        &lt;span className=&#123;lato.className&#125;&gt;&lt;a target="_blank" rel="noopener noreferrer" href='https://github.com/aruncodr'&gt;github/aruncodr&lt;/a&gt;&lt;/span&gt;&lt;br /&gt;
<br></br>        &lt;/p&gt;
<br></br>        &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>           &lt;span className='leading-none font-bold'&gt;CONTACT&lt;/span&gt;
<br></br>        &lt;/h2&gt;
<br></br>        &lt;p className='leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light'&gt;
<br></br>        &lt;span className=&#123;lato.className&#125;&gt;&lt;a href='tel:+919092131783'&gt;9786787507&lt;/a&gt;&lt;/span&gt;&lt;br /&gt;
<br></br>        &lt;span className=&#123;lato.className&#125;&gt;&lt;a target="_blank" rel="noopener noreferrer" href='https://maps.app.goo.gl/irQF5WG2HxAkpNno9'&gt;Pondicherry&lt;/a&gt;&lt;/span&gt;&lt;br /&gt;
<br></br>        &lt;span className=&#123;lato.className&#125;&gt;&lt;a target="_blank" rel="noopener noreferrer" href='mailto: arunzeds@gmail.com'&gt;arunzeds@gmail.com&lt;/a&gt;
<br></br>        &lt;/span&gt;&lt;br /&gt;
<br></br>        &lt;/p&gt;
<br></br>  &lt;/div&gt;
<br></br>  &#123;/* ----------------- OTHER PERKS -------------- */&#125;
<br></br>  &lt;div&gt;
<br></br>      &lt;h1 className=&#123;` $&#123;lato.className&#125; leading-none text-[#525659] text-2xl pt-3 font-light`&#125;&gt;OTHER PERKS&lt;/h1&gt;
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;FOCUS&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        L&lt;span className='leading-none text-xs'&gt;EARNING &lt;/span&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;Continue Focusing on Full-Stack Development and DevOps.&lt;/p&gt;
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;COMMUNICATE&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        L&lt;span className='leading-none text-xs'&gt;ANGUAGES&lt;/span&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;Speaks Native Tamil, Conversational English.&lt;/p&gt;
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;MORE&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        F&lt;span className='leading-none text-xs'&gt;REE &lt;/span&gt;
<br></br>        T&lt;span className='leading-none text-xs'&gt;IME&lt;/span&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;To Blog, Travel, take Photo graphs, and Explore Men&apos;s Lifestyles.&lt;/p&gt;
<br></br>  &lt;/div&gt;
<br></br>    &#123;/* -------------------- MORE ---------------- */&#125;
<br></br>  &lt;div&gt;
<br></br>      &lt;h1 className=&#123;` $&#123;lato.className&#125; leading-none text-[#525659] text-2xl pt-3 font-light`&#125;&gt;MORE&lt;/h1&gt;
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;CRAFTS&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        P&lt;span className='leading-none text-xs '&gt;ROJECTS&lt;/span&gt;
<br></br>        &lt;div className='pt-1.5 text-[#666666] text-[13px]'&gt;
<br></br>        R&lt;span className='text-[12px]'&gt;ESUME &lt;/span&gt;
<br></br>        B&lt;span className='text-[12px]'&gt;UILDER&lt;/span&gt;&lt;/div&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;Our website helps users create and customize professional resumes, enhancing their job prospects.&lt;/p&gt;
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>      &lt;div className='text-[#666666] text-[13px]'&gt;
<br></br>        3&lt;span className='text-[12px]'&gt;D &lt;/span&gt;
<br></br>        P&lt;span className='text-[12px]'&gt;ORTFOLIO - &lt;/span&gt;
<br></br>        T&lt;span className='text-[12px]'&gt;hree JS&lt;/span&gt;&lt;/div&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;A 3D Portfolio is an interactive, three-dimensional digital showcase of my projects.&lt;/p&gt;
<br></br>  &lt;/div&gt;
<br></br>&lt;/div&gt;
<br></br>&#123;/* **************************** Second column ************************************* */&#125;
<br></br>&lt;div className='col-span-2 pl-4 pr-2'&gt;
<br></br>  &#123;/* ------------------SKILLS---------------- */&#125;
<br></br>  &lt;div&gt;
<br></br>      &lt;h1 className=&#123;` $&#123;lato.className&#125; leading-none text-[#525659] text-2xl pt-3 font-light`&#125;&gt;SKILLS&lt;/h1&gt;
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;FRONT &lt;/span&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;END&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        L&lt;span className='leading-none text-xs'&gt;IBRARIES &lt;/span&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;Tailwind, JavaScript, React, Next.js&lt;/p&gt;
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;TECH&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        D&lt;span className='leading-none text-xs'&gt;ESIGNING &lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        T&lt;span className='leading-none text-xs'&gt;OOLS&lt;/span&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;Attentive to UI/UX details and high quality.&lt;br /&gt;Flow on Figma and Adobe Illustator.
<br></br>      &lt;br /&gt;Backend with app write. Fan of Github.&lt;br /&gt;Hands on Search engine optimization.&lt;/p&gt;
<br></br>  &lt;/div&gt;
<br></br>  &#123;/* ----------------- EDUCATION -------------- */&#125;
<br></br>  &lt;div&gt;
<br></br>      &lt;h1 className=&#123;` $&#123;lato.className&#125; leading-none text-[#525659] text-2xl pt-3 font-light`&#125;&gt;EDUCATION&lt;/h1&gt;
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;UNDER GRADUATE&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        C&lt;span className='leading-none text-xs'&gt;OMPUTER &lt;/span&gt;
<br></br>        S&lt;span className='leading-none text-xs'&gt;CIENCE&lt;/span&gt;&lt;br /&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;div className='leading-none pt-1.5 text-[#666666] tracking-wide text-[13px] font-medium'&gt;Bachelor of Computer Applications - B.C.A&lt;/div&gt;
<br></br>      &lt;p className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light`&#125;&gt;Sri Aravindar Arts and Science College&lt;br /&gt;College in Tamil Nadu&lt;/p&gt;
<br></br>  &lt;/div&gt;
<br></br>  &#123;/* ---------------PROJECT EXPERIENCE------------ */&#125;
<br></br>  &lt;div&gt;
<br></br>      &lt;h1 className=&#123;` $&#123;lato.className&#125; leading-none text-[#525659] text-2xl pt-3 font-light`&#125;&gt;PROJECT EXPERIENCE&lt;/h1&gt;
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;MOTHER CABS&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        C&lt;span className='leading-none text-xs'&gt;AB &lt;/span&gt;
<br></br>        B&lt;span className='leading-none text-xs'&gt;OOKING&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        G&lt;span className='leading-none text-xs'&gt;OOGLE &lt;/span&gt;
<br></br>        A&lt;span className='leading-none text-xs'&gt;PI&lt;/span&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;h3 className=&#123;` $&#123;lato.className&#125; leading-none pb-0.5 pt-1.5 text-[#666666] tracking-wide text-[13px] font-medium`&#125;&gt;
<br></br>      &#123;/* &lt;a target="_blank" rel="noopener noreferrer" href='https://mothercabs.com/'&gt;mothercabs.com&lt;/a&gt; &nbsp;|&nbsp;  */&#125;
<br></br>      Tailwind &nbsp;|&nbsp; React js &nbsp;|&nbsp; Next JS &nbsp;|&nbsp; Mongo DB&lt;/h3&gt;
<br></br>      &lt;ul role="list" className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light marker:text-[#666666] list-disc pl-5 pr-1 space-y-0.5`&#125;&gt;
<br></br>        &lt;li&gt;A Cab Booking System is essentially an online platform where users can request a taxi ride by selecting their desired vehicle type, 
<br></br>            input ting their pickup and drop-off locations.&lt;/li&gt;
<br></br>        
<br></br>        &lt;li&gt;Providing features like estimated fare calculation, allowing custo mers to easily schedule trips and receive updates on 
<br></br>            their ride status.&lt;/li&gt;
<br></br>        &lt;li&gt; The system automatically notify to my client authorized drivers to pick them up.&lt;/li&gt;
<br></br>      &lt;/ul&gt;
<br></br>
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;AZ SPECS&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        M&lt;span className='leading-none text-xs'&gt;OBILE &lt;/span&gt;
<br></br>        S&lt;span className='leading-none text-xs'&gt;PECIFICATION &lt;/span&gt;
<br></br>        W&lt;span className='leading-none text-xs'&gt;EBSITE&lt;/span&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;h3 className=&#123;` $&#123;lato.className&#125; leading-none pb-0.5 pt-1.5 text-[#666666] tracking-wide text-[13px] font-medium`&#125;&gt;
<br></br>      &#123;/* &lt;a target="_blank" rel="noopener noreferrer" href='https://azspecs.com/'&gt;azspecs.com&lt;/a&gt; &nbsp;|&nbsp;  */&#125;
<br></br>      Tailwind &nbsp;|&nbsp; React js &nbsp;|&nbsp; Next JS&lt;/h3&gt;
<br></br>      &lt;ul role="list" className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light marker:text-[#666666] list-disc pl-5 pr-1 space-y-0.5`&#125;&gt;
<br></br>        &lt;li&gt;AZ Spces is newly recognized as one of the top resources for in-depth technical information on mobile phones.&lt;/li&gt;
<br></br>        &lt;li&gt;The site offers extensive specifications and comparisons across a large database of smartphone models, covering aspects 
<br></br>            like display, processor, camera, battery, and other hardware components.&lt;/li&gt;
<br></br>      &lt;/ul&gt;
<br></br>
<br></br>      &lt;h2 className='leading-none pt-2 font-semibold text-sm'&gt;
<br></br>        &lt;span className='leading-none font-bold'&gt;PONDY STORE&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        E&lt;span className='leading-none text-xs'&gt;XPLORE &lt;/span&gt;
<br></br>        P&lt;span className='leading-none text-xs'&gt;ONDICHERRY&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        T&lt;span className='leading-none text-xs'&gt;OURISM&lt;/span&gt; &nbsp;|&nbsp; 
<br></br>        S&lt;span className='leading-none text-xs'&gt;HOPPING&lt;/span&gt;
<br></br>      &lt;/h2&gt;
<br></br>      &lt;h3 className=&#123;` $&#123;lato.className&#125; leading-none pb-0.5 pt-1.5 text-[#666666] tracking-wide text-[13px] font-medium`&#125;&gt;
<br></br>      &#123;/* &lt;a target="_blank" rel="noopener noreferrer" href='https://pondystore.com/'&gt;pondystore.com&lt;/a&gt; &nbsp;|&nbsp;  */&#125;
<br></br>      Tailwind &nbsp;|&nbsp; React js &nbsp;|&nbsp; Next JS&lt;/h3&gt;
<br></br>      &lt;ul role="list" className=&#123;` $&#123;lato.className&#125; leading-5 pb-1 text-black pt-0.5 tracking-wide text-sm font-light marker:text-[#666666] list-disc pl-5 pr-1 space-y-0.5`&#125;&gt;
<br></br>        &lt;li&gt;Pondystore is a concept designed to explore the tourist attractions and top shopping spots in Pondicherry. &lt;/li&gt;
<br></br>        &lt;li&gt;My website assists travelers in making informed decisions by offering reviews, price comparisons, and offering services.&lt;/li&gt;
<br></br>      &lt;/ul&gt;
<br></br>  &lt;/div&gt;
<br></br>
<br></br>&lt;/div&gt;
<br></br>&lt;/div&gt;
<br></br>&lt;/div&gt;
<br></br>)














</code>

</pre>














        </div>
  </div>
</div>

</div>
  )
}

export default PageContent
