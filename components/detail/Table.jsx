import React from 'react'

export default function Table({tableonehead, tabledata, column}) {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-3 mb-3">

    <div className="overflow-x-auto">
      <table className="w-full  backdrop-blur bg-black/[0.2]">
        <thead>
          <tr className=""> 
            <th className="w-28 pl-4 py-1 bg-white/[0.6] lg:py-2 text-left text-base font-semibold text-black">
              {tableonehead[0]}
            </th>
            <th className="px-4  py-1 bg-white/[0.6] lg:py-2 text-left text-base font-semibold text-black">
            {tableonehead[1]}
            </th>

            {column=="col2"?
            <th className="px-4  py-1 bg-white/[0.6] lg:py-2 text-left text-base font-semibold text-black">
              {tableonehead[2]}
              </th>
            :null}

          </tr>
        </thead>
        <tbody>
          {tabledata.map((row, index) => (
            <tr
              key={index}
              className=' bg-white/[0.9]'
            >
              <td className="w-28 pl-4 py-1 lg:py-2 text-[15px] text-gray-800 font-medium">
                <h3>{row.feature}</h3>
              </td>
              <td className="px-4 py-1 lg:py-2 text-[15px] text-gray-800 font-medium">
                {row.col1}
              </td>

              {column=="col2"?
              <td className="px-4 py-1 lg:py-2 text-[15px] text-gray-800 font-medium">
                {row.col2}
              </td>
              :null}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
