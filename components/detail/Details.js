import { getPost1 } from '@/utils/get-post1'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Table from './Table';
import List from './List';
import { format, parseISO } from 'date-fns'
import RecentPost from '../RecentPost';


async function getProducts(slug) { 
    const getdata  = await getPost1();
    var data = getdata.allpost
    let newdata = data.filter((e) => {
      return e.route == slug;
      });
      return newdata;    
  }
async function getAds(slug) { 
    const getdata  = await getPost1();
    var data = getdata.allpost
    let newdata = data.filter((e) => {
      if(slug){
      }
      return e.ads == slug;
      });
      return newdata;    
  }
export default async function Details({slug}) {
  const aaa = await getProducts(slug)
  const z = aaa[0]

  const ads = await getAds(z?.ads)
  
  const createdate = z?.publishedAt || "2026-01-01T00:00:00+05:30";
  const imgsrc = z?.img || "/error.png"
  const imgalt = z?.name || "Error"
  const imgsrc2 = z?.img2 || "/error.png"
  const imgalt2 = z?.name2 || "Error"
  const imgsrc3 = z?.img3 || "/error.png"
  const imgalt3 = z?.name3 || "Error"
  const imgsrc4 = z?.img4 || "/error.png"
  const imgalt4 = z?.name4 || "Error"

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": [
            "Person",
            "Organization"
          ],
          "@id": "https://www.mothertravelspuducherry.com/#person",
          "name": "mothertravelspuducherry.com"
        },
        {
          "@type": "WebSite",
          "@id": "https://www.mothertravelspuducherry.com/#website",
          "url": "https://www.mothertravelspuducherry.com/",
          "name": "mothertravelspuducherry.com",
          "publisher": {
            "@id": "https://www.mothertravelspuducherry.com/#person"
          },
          "inLanguage": "en-US"
        },
        {
          "@type": "ImageObject",
          "@id": "https://www.mothertravelspuducherry.com/"+z?.img,
          "url": "https://www.mothertravelspuducherry.com/"+z?.img,
          "width": "1200",
          "height": "720",
          "caption": z?.metatitle,
          "inLanguage": "en-US"
        },
        {
          "@type": "WebPage",
          "@id": "https://www.mothertravelspuducherry.com/models/"+z?.route+"/#webpage",
          "url": "https://www.mothertravelspuducherry.com/models/"+z?.route+"/",
          "name": z?.metatitle,
          "datePublished": z?.publishedAt,
          "dateModified": z?.modifiedAt,
          "isPartOf": {
            "@id": "https://www.mothertravelspuducherry.com/#website"
          },
          "primaryImageOfPage": {
            "@id": "https://www.mothertravelspuducherry.com/"+z?.img
          },
          "inLanguage": "en-US"
        },
        {
          "@type": "Person",
          "@id": "https://www.mothertravelspuducherry.com/author/arunzed/",
          "name": "Arunzed",
          "url": "https://www.mothertravelspuducherry.com/author/arunzed/",
          "image": {
            "@type": "ImageObject",
            "@id": "https://www.mothertravelspuducherry.com/author/arunzed.jpg",
            "url": "https://www.mothertravelspuducherry.com/author/arunzed.jpg",
            "caption": "Arunzed",
            "inLanguage": "en-US"
          }
        },
        {
          "@type": "NewsArticle",
          "headline": z?.metatitle,
          "keywords": z?.keywords,
          "datePublished": z?.publishedAt,
          "dateModified": z?.modifiedAt,
          "articleSection": "Auto",
          "author": {
            "@id": "https://www.mothertravelspuducherry.com/author/arunzed/",
            "name": "Arunzed"
          },
          "publisher": {
            "@id": "https://www.mothertravelspuducherry.com/#person"
          },
          "description": z?.metadesc,
          "name": z?.metatitle,
          "@id": "https://www.mothertravelspuducherry.com/models/"+z?.route+"/#richSnippet",
          "isPartOf": {
            "@id": "https://www.mothertravelspuducherry.com/models/"+z?.route+"/#webpage"
          },
          "image": {
            "@id": "https://www.mothertravelspuducherry.com/"+z?.img,
          },
          "inLanguage": "en-US",
          "mainEntityOfPage": {
            "@id": "https://www.mothertravelspuducherry.com/models/"+z?.route+"/#webpage"
          }
        }
      ]
    }
  ]

  const microdata = [
    {
      "@context": {
        "@vocab": "https://schema.org/"
      },
      "@type": [
        "Blog"
      ]
    },
    {
      "@context": {
        "@vocab": "https://schema.org/"
      },
      "@type": [
        "WPHeader"
      ],
      "headline": [
        "Mother Motors"
      ]
    },
    {
      "@context": {
        "@vocab": "https://schema.org/"
      },
      "@type": [
        "SiteNavigationElement"
      ]
    },
    {
      "@context": {
        "@vocab": "https://schema.org/"
      },
      "@type": [
        "CreativeWork"
      ],
      "image": [
        "https://www.mothertravelspuducherry.com/"+z?.img,
      ],
      "headline": [
        z?.metatitle
      ],
      "datePublished": [
        z?.publishedAt,
      ],
      "author": [
        {
          "@type": [
            "Person"
          ],
          "url": [
            "https://www.mothertravelspuducherry.com/author/arunzed/"
          ],
          "name": [
            "Arunzed"
          ]
        }
      ],
      "text": [
        z?.full
      ]
    },
    {
      "@context": {
        "@vocab": "https://schema.org/"
      },
      "@type": [
        "WPFooter"
      ]
    }
  ]

  return (
    <div className='max-w-[1440px] lg:flex xl:px-24 mx-auto bg-[#F7F8F9]'>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(microdata) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>

        <div className='lg:flex mt-15 lg:mt-20'>
            <div className='lg:w-8/12 pt-4 lg:px-4 lg:pb-12 lg:mb-8  text-[18px] tracking-wide bg-white'>
              
              <h1 className='pl-3 text-2xl lg:text-3xl font-extrabold twoline'>{z?.h1}</h1>
              <time className='pl-3 py-2 text-[15px] text-gray-700'>{format(parseISO(createdate), "LLLL d, yyyy")} by <span className='text-blue-600'>Arunzed</span></time>
                  <div className='pt-2.5'></div>

              <div className='relative h-[254px] lg:h-[488px]'>
              <Image className='object-cover' alt={imgalt} title={z?.name}
                priority
                placeholder='blur'  blurDataURL={imgsrc}
                fill
                src={imgsrc}
                sizes='100vw'
                />
              </div>
              
              <div className='text-gary-700 pl-4 pr-2 pt-1.5'>{z?.desc} <span className='font-semibold'> {z?.desc2} </span> {z?.desc3}</div>
              
              <ul className='grid grid-cols-2 space-x-2 space-y-2 pl-6 pr-5 pt-2'>
                  <li className='bg-gray-100 py-2.5 text-center rounded-lg col-span-2'><div className='font-bold text-[22px]'>{z?.name}</div></li>
                  <li className='bg-gray-100 py-2.5 text-center rounded-lg'><div className='font-semibold text-xl'>{z?.price}</div><div className='font-medium text-[15px]'>Ex-Showroom Price</div></li>
                  <li className='bg-gray-100 py-2.5 text-center rounded-lg'><div className='font-semibold text-xl'>{z?.topspeed} <span className='text-base'>kmph</span></div><div className='font-medium text-[15px]'>Top Speed</div></li>
                  <li className='bg-gray-100 py-2.5 text-center rounded-lg'><div className='font-semibold text-xl'>{z?.mileage} <span className='text-base'>{z?.permileage}</span></div><div className='font-medium text-[15px]'> Mileage</div></li>
                  <li className='bg-gray-100 py-2.5 text-center rounded-lg mr-2 mb-2'><div className='font-semibold text-xl'>{z?.servicecost}</div><div className='font-medium text-[15px]'>Serive cost</div></li>
              </ul>
              <h2 className="pt-4 pl-4 pr-2 text-lg font-medium text-gray-800 darks:text-white">Detail about Pricing, Top Speed, Mileage, service cost is below in this blog</h2>


              {/* <h2 className="pt-4 pl-4 pr-4 text-3xl font-bold text-gray-800 leading-[40px] darks:text-white">{z?.specs}</h2> */}

              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingone}</h2>
              {z?.tableone ? <Table tabledata={z?.tableone} tableonehead={z?.tableonehead} column={z?.tableone[0].col2?"col2":null}/> :null}
              {z?.listone ? <List nolisthead={z?.nolistheadone} list={z?.listone} type={z?.listonetype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.paraone1} <span className='font-semibold'>{z?.paraone2}</span> {z?.paraone3}</p>

              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingtwo}</h2>
              {z?.tabletwo ? <Table tabledata={z?.tabletwo} tableonehead={z?.tabletwohead} column={z?.tabletwo[0].col2?"col2":null}/> :null}
              {z?.listtwo ? <List nolisthead={z?.nolistheadtwo} list={z?.listtwo} type={z?.listtwotype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.paratwo1} <span className='font-semibold'>{z?.paratwo2}</span> {z?.paratwo3}</p>

              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingthree}</h2>
              {z?.tablethree ? <Table tabledata={z?.tablethree} tableonehead={z?.tablethreehead} column={z?.tablethree[0].col2?"col2":null}/> :null}
              {z?.listthree ? <List nolisthead={z?.nolistheadthree} list={z?.listthree} type={z?.listthreetype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.parathree1} <span className='font-semibold'>{z?.parathree2}</span> {z?.parathree3}</p>


              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingfour}</h2>
              {z?.tablefour ? <Table tabledata={z?.tablefour} tableonehead={z?.tablefourhead} column={z?.tablefour[0].col2?"col2":null}/> :null}
              {z?.listfour ? <List nolisthead={z?.nolistheadfour} list={z?.listfour} type={z?.listfourtype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.parafour1} <span className='font-semibold'>{z?.parafour2}</span> {z?.parafour3}</p>

              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingfive}</h2>
              {z?.tablefive ? <Table tabledata={z?.tablefive} tableonehead={z?.tablefivehead} column={z?.tablefive[0].col2?"col2":null}/> :null}
              {z?.listfive ? <List nolisthead={z?.nolistheadfive} list={z?.listfive} type={z?.listfivetype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.parafive1} <span className='font-semibold'>{z?.parafive2}</span> {z?.parafive3}</p>

              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingsix}</h2>
              {z?.tablesix ? <Table tabledata={z?.tablesix} tableonehead={z?.tablesixhead} column={z?.tablesix[0].col2?"col2":null}/> :null}
              {z?.listsix ? <List nolisthead={z?.nolistheadsix} list={z?.listsix} type={z?.listsixtype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.parasix1} <span className='font-semibold'>{z?.parasix2}</span> {z?.parasix3}</p>
    
              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingseven}</h2>
              {z?.tableseven ? <Table tabledata={z?.tableseven} tableonehead={z?.tablesevenhead} column={z?.tableseven[0].col2?"col2":null}/> :null}
              {z?.listseven ? <List nolisthead={z?.nolistheadseven} list={z?.listseven} type={z?.listseventype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.paraseven1} <span className='font-semibold'>{z?.paraseven2}</span> {z?.paraseven3}</p>

              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingeight}</h2>
              {z?.tableeight ? <Table tabledata={z?.tableeight} tableonehead={z?.tableeighthead} column={z?.tableeight[0].col2?"col2":null}/> :null}
              {z?.listeight ? <List nolisthead={z?.nolistheadeight} list={z?.listeight} type={z?.listeighttype} type2={z?.listeighttype2}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.paraeight1} <span className='font-semibold'>{z?.paraeight2}</span> {z?.paraeight3}</p>
    
              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingnine}</h2>
              {z?.tablenine ? <Table tabledata={z?.tablenine} tableonehead={z?.tableninehead} column={z?.tablenine[0].col2?"col2":null}/> :null}
              {z?.listnine ? <List nolisthead={z?.nolistheadnine} list={z?.listnine} type={z?.listninetype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.paranine1} <span className='font-semibold'>{z?.paranine2}</span> {z?.paranine3}</p>
             
              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingten}</h2>
              {z?.tableten ? <Table tabledata={z?.tableten} tableonehead={z?.tabletenhead} column={z?.tableten[0].col2?"col2":null}/> :null}
              {z?.listten ? <List nolisthead={z?.nolistheadten} list={z?.listten} type={z?.listtentype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.paraten1} <span className='font-semibold'>{z?.paraten2}</span> {z?.paraten3}</p>
        
              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingeleven}</h2>
              {z?.tableeleven ? <Table tabledata={z?.tableeleven} tableonehead={z?.tableelevenhead} column={z?.tableeleven[0].col2?"col2":null}/> :null}
              {z?.listeleven ? <List nolisthead={z?.nolistheadeleven} list={z?.listeleven} type={z?.listeleventype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.paraeleven1} <span className='font-semibold'>{z?.paraeleven2}</span> {z?.paraeleven3}</p>

              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingtwelve}</h2>
              {z?.tabletwelve ? <Table tabledata={z?.tabletwelve} tableonehead={z?.tabletwelvehead} column={z?.tabletwelve[0].col2?"col2":null}/> :null}
              {z?.listtwelve ? <List nolisthead={z?.nolistheadtwelve} list={z?.listtwelve} type={z?.listtwelvetype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.paratwelve1} <span className='font-semibold'>{z?.paratwelve2}</span> {z?.paratwelve3}</p>
    
              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingthirteen}</h2>
              {z?.thirteen ? <Table tabledata={z?.thirteen} tableonehead={z?.thirteenhead} column={z?.thirteen[0].col2?"col2":null}/> :null}
              {z?.listthirteen ? <List nolisthead={z?.nolistheadthirteen} list={z?.listthirteen} type={z?.listthirteentype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.parathirteen1} <span className='font-semibold'>{z?.parathirteen2}</span> {z?.parathirteen3}</p>
    
              <h2 className="pt-4 pl-4 pr-4 text-2xl font-bold text-gray-800 darks:text-white">{z?.headingfourteen}</h2>
              {z?.fourteen ? <Table tabledata={z?.fourteen} tableonehead={z?.fourteenhead} column={z?.fourteen[0].col2?"col2":null}/> :null}
              {z?.listfourteen ? <List nolisthead={z?.nolistheadfourteen} list={z?.listfourteen} type={z?.listfourteentype}/>:null}
              <p className='text-gary-700 pl-4 pt-1 pr-1 lg:pr-4'>{z?.parafourteen1} <span className='font-semibold'>{z?.parafourteen2}</span> {z?.parafourteen3}</p>

            </div>

            <div className='lg:w-4/12 h-96 lg:ml-4 lg:pl-6 pt-4 bg-white'>
              <RecentPost/>
            </div>

        </div>



    </div>
  )
}
