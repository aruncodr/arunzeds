import Image from 'next/image'
import Link from 'next/link'
import { Urbanist } from "next/font/google";
import Form from 'next/form';
const urban = Urbanist({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
})

// --light: #edf2f9;
// --dark: #152e4d;
// --darker: #12263f;
export default function NotFound() {
  return (
    <div className={`${urban} bg-gray-100 dark:bg-gray-800 dark:text-[#edf2f9]`}>

    <div className='mx-auto text-center w-fit'>
      <p className="font-semibold text-red-500 text-9xl dark:text-red-600 pt-12">404</p>
      <div className="space-y-2">
              <h1 id="pageTitle" className="flex mx-auto w-fit items-center space-x-2">
                <svg aria-hidden="true" className="w-6 h-6 text-red-500 dark:text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"    >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"      />
                </svg>
                <div className="text-xl font-medium text-gray-600 sm:text-2xl dark:text-light">
                  Oops! Page not found.
                </div>
              </h1>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                The page you are looking for was not found.
              </p>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                You may return to
                <Link href="/" className="text-red-600 hover:underline dark:text-red-500">&nbsp;Home page</Link> or try
                using the search form.
              </p>
            </div>
          </div>


      <Form action="/search">
            <div className="flex items-center justify-center w-[500px] mx-auto pt-6 pb-10">
              <input
                type="text"
                name="query"
                placeholder="What are you looking for?"
                className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none focus:ring focus:ring-red-400 dark:bg-darker dark:focus:ring-red-800"
              />
              <button type='sumbit'
                className="p-2 text-white rounded-r-md bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-800 focus:outline-none focus:ring focus:ring-primary-light dark:focus:ring-primary-darker"
              >
                <span className="sr-only">Search</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </Form>
      <div className='w-fit mx-auto pb-36'>

      </div>
    </div>
  )
}