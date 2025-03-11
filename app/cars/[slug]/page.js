import Details from '@/components/detail/Details'
import { getPost1 } from '@/utils/get-post1';
import React  from 'react'

export async function generateStaticParams() {
  const getdata = await getPost1();  
  var data = getdata.allpost
    return data.map((e)=>({slug: e.route,}));
}

export async function generateMetadata({params}) {
  const {slug} = await params
  const {allpost} = await getPost1();  
  var am = allpost.filter((e)=>{
    return (e.route == slug);
  })
  var m = am[0]
  return {
      title: m.metatitle,
      description: m.metadesc,
      keywords: m.keywords,
      robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
      datePublished: m.publishedAt,
      openGraph: {
        type: "article",
        locale: "en_US",
        url: `/${m.type}/${m.route}`,
        siteName: "mothertravelspuducherry.com",
        datePublished: m.publishedAt,
        authors: 'arun zed',
        title: m.metatitle,
        description: m.metadesc,
        images: [{
          url: m.img,
          width: 1200,
          height: 720,
          secureUrl: `https://www.mothertravelspuducherry.com/${m.img}`,
          alt: m.metatitle,
          type: "image/jpeg",
          label1: "written by",
          data1: "Arunzed",
          label2: "Time to read",
          data2: "3 minutes",
        }],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@Arun_zed_',
        title: m.metatitle,
        description: m.metadesc,
      },
      alternates: {
        canonical: `/${m.type}/${m.route}`,
        languages: { "en-US": "/en-US", },
      },
      article:{
          published_time: "2025-01-20T12:00:00Z",

      },
      // additionalMetaTags: [
      //   {
      //     name: 'article:published_time',
      //     content: m.publishedAt, // Example: "2025-01-20"
      //   },
      // ],
  }
}

export default async function page({params}) {
  const {slug} = await params
  return (
    <div>
        <Details slug={slug} />
    </div>
  )
}
