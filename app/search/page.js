import Listing from "@/components/Listing";
import { getPost1 } from "@/utils/get-post1";
import Noresult from "./Noresult";

export async function getSearchResults(query) {
    const {allpost} = await getPost1();
    return query ? allpost.filter(e => e?.full.toLowerCase().includes(query.toLowerCase()) ) : allpost;
}

export default async function SearchPage({ searchParams }) {
  const { query } = await searchParams
  const results = await getSearchResults(query)
  
  return (
    <div>
      {results.length > 0 ? <Listing selectedpost={results}/> : <Noresult query={query}/> }
    </div>
  )
}