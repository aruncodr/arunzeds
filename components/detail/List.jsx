import React from 'react'

export default function List({list, type, nolisthead}) {
  
  return (
    <div className='px-4 lg:px-6'>
        {list.map((e, index)=>{
          
          return(
            <ul key={index} className={`${type} pl-4 lg:pl-8 pr-1 `}>
                <li>
                  <div><h3 className={type=="list-no"?`-ml-4 pt-2 ${nolisthead} `:`pt-2 ${nolisthead}`}><strong>{type=="list-no"?<span>{e.id}. </span>:null}{e.head}</strong></h3></div>
                  <div><p>{e.para}</p></div>
                </li>
            </ul>
            )

        })}

    </div>
  )
}
