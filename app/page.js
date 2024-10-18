"use client"
import Link from 'next/link'
import Header from './Header';
import { Montserrat,Lato } from 'next/font/google'
import Image from 'next/image';
const mont = Montserrat({ subsets: ['latin'],
   weight: ['100','300','400','500','600','700','900'],
})
const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],
})
export default function Home() {

  return (
<div className='text-stone-700 //color: rgb(20 184 166); 20,184,166 :  204,251,241'>

    <div>
      <Header/>
    </div>
    
    <div className='flex h-screen lg:h-[640px]'>
        <img className='absolute z-[-2] -bottom-4 -right-36 lg:right-44 w-[900px] lg:w-[760px]' src="/aruncrop.svg" ></img>


    <div className="absolute top-0 z-[-3] w-full rotate-180 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(202,224,226,.5)_100%)]" />
      {/* ------lower------- */}

      {/* -----upper------ */}
    {/* <div class="absolute top-0 left-10  h-screen w-[1200px]
      bg-[radial-gradient(100%_50%_at_50%_0%,rgba(153,246,228,0.1)_0,rgba(20,184,166,0)_50%,rgba(20,184,166,0)_100%)]"></div> */}
      {/* ------left lower------- */}

      <div className='md:w-1/2 pt-12 md:pt-20 pl-6 lg:pl-52'>
          <div className={`${lato.className} leading-none font-semibold text-5xl md:text-[76px]`}>
              Arun Zeds<span className='text-teal-500'>;</span>
          </div>
            {/* h1 - 7xl | h2 - xs | test - 14px */}
          <div className='flex flex-col gap-2.5 md:flex-row  leading-none tracking-widest text-[0.83em] text-stone-500 pt-2.5 font-semibold'>
              <div className='col-span-2 '>FULL STACK DEVELOPER&nbsp;</div>
              <div className=' text-teal-500 hidden md:flex'>|&nbsp;</div>
              <div className=' '>PONDICHERRY, INDIA</div>
          </div>
          <div className={`${lato.className} pt-4 md:pt-1.5 pb-2.5 md:pb-0.5 text-sm text-[1.20rem] font-[400] tracking-wider md:w-[360px]`}>           
            <div className='text-teal-500 pt-0.5 text-[14px] lg:text-[15px] font-medium'>
              Desc<snap className="font-semibold">&nbsp; (&nbsp; )</snap>
              <span className='text-teal-500 text-[14px] lg:text-[15px] font-semibold'>&nbsp; &#123;</span>
            </div>
            <div className='leading-[22px] py-1 text-[15px] lg:text-[15px] text-stone-600'>
              We mainly use<span className='text-teal-500 font-normal'> Tailwind, React, Next js and Mongo db </span> 
              to create innovative website with great user experience to our clients.
            </div>
            <div className='text-teal-500 text-[14px] lg:text-[15px] font-semibold'>&#125;</div>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="./cv">
            <button className='mt-2 h-10 w-36 font-medium text-[15px] mx-auto bg-teal-500 text-white rounded-lg'>
            getProject<snap className="font-semibold">&nbsp; (&nbsp; )</snap></button>
          </a>

          <div className='hidden pt-32'>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#FF5722" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path><path fill="#1C0802" d="M9,9v30h30V9H9z M23.691,31l-0.762-2.91h-3.916L18.252,31h-3.037l4.443-14.219h2.627L26.758,31H23.691z M30.85,31h-2.773V20.434h2.773V31z M30.552,18.754c-0.271,0.28-0.636,0.42-1.099,0.42s-0.828-0.14-1.099-0.42s-0.405-0.632-0.405-1.055c0-0.43,0.137-0.781,0.41-1.055s0.639-0.41,1.094-0.41s0.82,0.137,1.094,0.41s0.41,0.625,0.41,1.055C30.957,18.122,30.822,18.474,30.552,18.754z"></path><path fill="#1C0802" d="M19.639 25.697L22.295 25.697 20.967 20.629z"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
            </svg>

            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g transform="translate(.722 .64) scale(6.375)"><circle cx="40" cy="40" r="40"/>
                <path d="M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z" 
                fill="url(#prefix___Linear1)" fill-rule="nonzero"/><path fill="url(#prefix___Linear2)" d="M51.111 24h5.333v32h-5.333z"/></g><defs><linearGradient id="prefix___Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(51.103 -29.93 76.555) scale(25.1269)"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="prefix___Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90.218 14.934 38.787) scale(23.50017)">
              <stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
            </svg>

            <div className='pt-'>
            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="74" height="74">
                <path d="M40.162 23.768C24.121 25.189 10.496 36.065 5.473 51.443 4.028 55.874 3.53 59.05 3.53 64.026s.498 8.151 1.943 12.582c7.701 23.505 34.334 34.595 56.466 23.529L64 99.094l2.085 1.043c18.222 9.123 40.377 3.293 51.703-13.672 2.962-4.407 5.237-10.118 6.208-15.544.356-2.085.474-3.744.474-6.895 0-4.976-.497-8.152-1.943-12.583-7.701-23.505-34.334-34.594-56.442-23.529L64 28.957l-2.061-1.043a41.323 41.323 0 00-14.904-4.17c-3.152-.261-3.792-.261-6.873.024zm10.142 8.601c2.322.45 6.801 2.203 9.525 3.744 3.721 2.085 7.938 5.995 10.521 9.739 1.398 2.037 3.27 5.876 4.336 8.933 1.517 4.265 1.517 14.217 0 18.481-1.848 5.214-4.194 9.266-7.345 12.607-3.744 3.981-7.227 6.326-12.44 8.364-3.317 1.303-5.307 1.73-9.217 1.919-4.787.237-9.1-.331-12.488-1.682-.853-.356-1.73-.663-1.99-.711-.498-.118-4.763-2.488-6.208-3.46-1.54-1.042-5.331-4.762-6.801-6.682-.734-.971-1.35-1.824-1.35-1.895 0-.071-.545-1.067-1.209-2.204-1.161-2.014-1.943-3.649-1.753-3.649.047 0-.213-.758-.592-1.682-1.161-2.772-1.517-5.213-1.517-10.165 0-4.953.356-7.394 1.517-10.166.379-.924.639-1.682.592-1.682-.19 0 .592-1.635 1.753-3.649.664-1.137 1.209-2.132 1.209-2.204 0-.071.616-.924 1.35-1.895 1.47-1.92 5.261-5.64 6.801-6.682 1.422-.972 5.71-3.342 6.208-3.46.26-.047 1.256-.403 2.227-.782 2.156-.853 3.554-1.184 6.043-1.469 2.559-.284 8.577-.094 10.828.332z" fill="#f02e65"/><path d="M44.973 49.737c-.048.119-.664 2.536-1.327 5.403-.688 2.867-1.777 7.393-2.393 10.07-1.185 4.905-1.896 8.128-1.896 8.554 0 .118.735.214 1.635.214h1.635l.734-3.271c.427-1.777 1.375-5.852 2.133-9.051.759-3.199 1.682-7.085 2.038-8.649.355-1.564.711-2.985.782-3.151.071-.213-.332-.284-1.564-.284-.924 0-1.73.071-1.777.165zm-12.725 10.26l-2.18 2.37.64.758c.355.426 1.327 1.493 2.156 2.37l1.517 1.611h4.313l-2.038-2.204c-1.114-1.184-2.038-2.322-2.038-2.464 0-.166.853-1.232 1.896-2.369 1.042-1.161 1.895-2.157 1.895-2.275 0-.095-.9-.166-1.99-.166h-1.967l-2.204 2.369zm16.587-2.227c0 .071.403.521.9 1.019 1.849 1.848 3.152 3.412 3.081 3.72-.047.166-.948 1.279-2.038 2.44l-1.966 2.157h2.203l2.204-.024 2.013-2.203c1.115-1.232 2.015-2.323 2.015-2.465 0-.118-.948-1.232-2.133-2.487l-2.132-2.299H50.92c-1.161 0-2.085.071-2.085.142z" 
                fill="#f02e65"/>
            </svg>  </div>       
          

          
          </div>



      </div>
      <div className='w-1/2'>

      </div>
    </div>

    {/* ----------------------WORK () page ---------------------- <span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span> */}
    <div className="bg-stone-50 pt-12 mx-auto pb-20 lg:px-40">
      <div className={`${lato.className} pl-4 lg:pl-8 pb-4 lg:pb-12 text--center text-xl font-medium `}>
        Work<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span>
      </div>
      <div className='lg:flex'>
        <div className="mx-auto p-5 w-[300px] lg:w-[500px] bg-white rounded-2xl shadow-sm">
        <a target="_blank" rel="noopener noreferrer" href='https://mothercabs.com/'>
            <Image className="h-[250px] object-fit shadow-sm" src="/mothercabs.png" width={500} height={500}></Image>
            <div className={`tracking-wider pt-4 text-xl text-stone-700 font-medium`}>
            MOTHER CAB BOOKING PAGE
            </div>
        </a> 

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-600 tracking-wide`}>
            To book a cab taxi ride by selecting vechicle type, pickup and drop off location using Google API.
            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">React</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>

        <div className="mx-auto mt-12 lg:mt-0 p-5 w-[300px] lg:w-[500px] bg-white rounded-2xl shadow-sm">
            <div className=''>
              <Image className="rounded-lg h-[250px] object-cover object-top shadow-sm" src="/l.png" width={500} height={500}></Image>
            </div>
            <div className={`tracking-wider pt-4 text-xl text-stone-700 font-medium`}>
              PONDICHERRY TORISIUM
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-500 tracking-wide`}>
            Explore pondicherry tourist attraction spots and assist travellers to making Decisions by offering reviews.
            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>

      </div>
      {/* ---------------- 2 FLEX ----------------- */}
    <div className='lg:flex pt-12'>
      <div className="mx-auto p-5 w-[300px] lg:w-[500px] bg-white rounded-2xl shadow-sm">
            <div className=''>
              <Image className="rounded-lg h-[250px] object-cover object-top shadow-sm" src="/l.png" width={500} height={500}></Image>
            </div>
            <div className={`tracking-wider pt-4 text-xl text-stone-700 font-medium`}>
              AZ MOBILE SPECIFICATION
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-500 tracking-wide`}>
            Indepth Technical Information on Mobile Phone, Offers extensive specifications like display, 
            processor, camera, battery and more.

            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Mongo db</div>

            </div>
        </div>
        <div className="mx-auto mt-12 lg:mt-0 p-5 w-[300px] lg:w-[500px] bg-white rounded-2xl shadow-sm">
            <div className=''>
              <Image className="rounded-xl h-[250px] object-cover object-top shadow-sm" src="/l.png" width={500} height={500}></Image>
            </div>
            <div className={`tracking-wider pt-4 text-xl text-stone-700 font-medium`}>
              PONDICHERRY TORISIUM
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-500 tracking-wide`}>
            Explore Pondicherry Tourist Attraction spots and Assist travellers to making Decisions by offering reviews.
            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>
      </div>

    </div>
    {/* --------------------- About () ------------------------- */}
    <div className='mx-auto pt-12 pb-52 lg:pb-72  lg:px-40'>
      <div className={`${lato.className} pl-4 pb-6 lg:pb-0 lg:pl-8 text--center text-xl font-medium `}>
        About<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span>
      </div>
 
    <div className='flex flex-col lg:flex-row lg:gap-12 centent-center pt-16 mr-'>
      <div className={`${lato.className} text-center lg:w-6/12 lg:text-right lg:pl-80 leading-none font-semibold text-4xl lg:text-5xl lg:text-[76px]`}>
            Arun Zeds<span className='text-teal-500'>;</span>
      </div>
      <div className={`${lato.className} lg:w-7/12 pt-4 lg:pt-5 lg:pr-[200px] text-center lg:text-left font-[400] text-base tracking--wide leading-[34px] text-stone-700`}>
              <span className="text-2xl lg:text-4xl font-light">I'm a web developer based in pondicherry, India.</span>
      </div>
    </div>

    {/* Dedicated to <span className='text-teal-500'> turning ideas into creative solutions. </span> */}
              {/* <div className='text-lg text-center'>
              <span className='text--teal-500'> Outside</span> of coding, I love <span className='text-teal-500'>photography</span> and exploring <span className='text-teal-500'>men's lifestyles.</span>
              <span className='text-teal-500 font-semibold'>"</span>
             <span className='text-teal-500 font-medium'> Let's connect!</span>
             </div> */}

      {/* <div className='flex'>
        <div className={`${lato.className} md:px-16 pt-12 leading-none font-semibold text-5xl md:text-[76px]`}>
              Arun<br />Zeds<span className='text-teal-500'>;</span>
        </div>
        <div>

        </div>
        <Image className='rounded-full object-cover' src="/arunsm.svg" width={180} height={180}></Image>

      </div> */}

      <div className='text-teal-500 py-4 lg:py-9 text-2xl lg:text-[34px] text-center font-semibold'>Let's Talk About Your Dream</div>
      <div className='flex pt-4 justify-center gap-12 text-stone-500'>
        <a target="_blank" rel="noopener noreferrer" href='mailto: arunzeds@gmail.com'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
          <path fill="#78716c" d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/arunzeds'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
              <path fill="#78716c" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/aruncodr'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 64 64">
          <path fill="#78716c" d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://instagram.com/arun_zed_'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 64 64">
          <path fill="#78716c" d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
          </svg>
          </a>
      </div>

    </div>


</div>
  );
}
