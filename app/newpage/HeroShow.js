import Listing from "@/components/Listing";
import { getPost1 } from "@/utils/get-post1";
import Noresult from "./Noresult";
import { log } from "node:console";
import Form from "next/form";
import { deflate } from "node:zlib";

export async function getSearchResults(page) {
    const {allpost} = await getPost1();
    var end = page * 10
    var start = end - 10
    var check = allpost.slice(start,15)   
    return check;
}

export default async function HeroShow({ searchParams }) {
  // const { page } = await searchParams
  const results = await getSearchResults(1)
  
  return (
    <div className="dark:bg-gray-800 bg-[#F7F8F9]">
      {results.length > 0 ? 
      <Listing selectedpost={results}/>
      : <Noresult page={page}/> }

          <div name="au" className="flex gap-6 items-center mx-auto w-fit py-12">
            <Form action="/newpage">
                <input defaultValue="1" className='hidden' name="page" />
                <button type="sumbit" className="bg-gray-600 text-white px-4  py-1.5 font-semibold text-[15px] select-none">Back</button>
            </Form>
            {/* <Form action="/newpage">
                <input defaultValue={left} className='hidden' name="page" />
                <button type="sumbit" className="bg-red-500 px-4  py-1.5 font-semibold select-none">Back</button>
            </Form> */}
            <div className="text-4xl leading-none"></div>
            {/* <Form action="/newpage">
                <input defaultValue={left} className='hidden' name="page" />
                <button type="sumbit" className="bg-red-500 px-4  py-1.5 font-semibold select-none">Back</button>
            </Form> */}

            <Form action="/newpage">
                <input defaultValue="1" className='hidden' name="page" />
                <button type="sumbit" className="bg-gray-600 text-white px-4  py-1.5 font-semibold text-[15px] select-none">Next</button>
            </Form>
          </div>
                        
    </div>
  )
}