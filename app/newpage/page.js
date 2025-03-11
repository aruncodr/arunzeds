import Listing from "@/components/Listing";
import { getPost1 } from "@/utils/get-post1";
import Noresult from "./Noresult";
import { count, log } from "node:console";
import Form from "next/form";
import { deflate } from "node:zlib";

export async function getSearchResults(page) {
    const {allpost} = await getPost1();
    var end = page * 15
    var start = end - 15
    var check = allpost.slice(start,start+15)
    return check;
}

export async function getLast() {
    const {allpost} = await getPost1();

    var check = allpost
    return check;
}

export default async function SearchPage({ searchParams }) {
  const { page } = await searchParams
  const results = await getSearchResults(page)
  
    var left; var right; var multiple = page * 15;
    {page > 1 ? left = parseInt(page) - 1 : left = 1 }
    {multiple < results.length ? right = page : right = parseInt(page) + 1}

    const lastpage = await getLast()
    const finalpage = Math.ceil(lastpage.length / 15)
    
  return (
    <div className="dark:bg-gray-800 bg-[#F7F8F9]">
      {results.length > 0 ? 
      <Listing selectedpost={results}/>
      : <Noresult page={page}/> }

          <div name="au" className="flex gap-6 items-center justify-center mx-auto w-fit py-12">
            <Form action="/newpage">
                <input defaultValue={left} className='hidden' name="page" />
                <button type="sumbit" className="bg-gray-600 text-white px-6  py-0.5 font-semibold text-[15px] select-none">Back</button>
            </Form>
            
            <Form action="/newpage">
                <input defaultValue="1" className='hidden' name="page" />
                <button type="sumbit" className={` ${page == 1 ? "border":null} bg-gray-600 text-white px-4  py-0.5 font-semibold text-[15px] select-none `}>1</button>
            </Form>

            <div className="text-white text-2xl">...</div>

{page > 2 ?<div className="flex gap-6 items-center justify-center">

            <Form action="/newpage">
                <input defaultValue={parseInt(page) - 1} className='hidden' name="page" />
                <button type="sumbit" className="bg-gray-600 text-white px-4  py-0.5 font-semibold select-none">{parseInt(page) - 1}</button>
            </Form>

            <Form action="/newpage">
                <input defaultValue={page} className='hidden' name="page" />
                <button type="sumbit" className="bg-gray-600 text-white border border-gray-300 px-4  py-0.5 font-semibold select-none">{page}</button>
            </Form>
            </div>
:null}

            {page == finalpage
            ?<div></div>
            :<Form action="/newpage">
            <input defaultValue={parseInt(page) + 1} className='hidden' name="page" />
            <button type="sumbit" className="bg-gray-600 text-white px-4  py-0.5 font-semibold select-none">{parseInt(page) + 1}</button>
            </Form>
            }

            <div className="text-white text-2xl">...</div>

            {page == finalpage ? <div></div>
            :<Form action="/newpage">
                <input defaultValue={finalpage} className='hidden' name="page" />
                <button type="sumbit" className="bg-gray-600 text-white px-4  py-0.5 font-semibold select-none">{finalpage}</button>
            </Form>
            }
            <Form action="/newpage">
                <input defaultValue={right} className='hidden' name="page" />
                <button type="sumbit" className="bg-gray-600 text-white px-6  py-0.5 font-semibold text-[15px] select-none">Next</button>
            </Form>
          </div>
                        
    </div>
  )
}