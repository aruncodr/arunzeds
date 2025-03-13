import React from 'react'

export default function Table({tableonehead, tabledata, column}) {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-3 mb-3">

    <div className="overflow-x-auto">
      <table className="w-full border-collapse border-none border-gray-200">
        <thead>
          <tr className="bg-gray--100">
            <th className="w-24 border-b border-gray-200 py-1 lg:py-2 text-left text-[17px] font-bold text-gray-700">
              {tableonehead[0]}
            </th>
            <th className="pl-4 lg:pl-16 border-b border-gray-200 py-1 lg:py-2 text-left text-[17px] font-bold text-gray-700">
            {tableonehead[1]}
            </th>

            {column=="col2"?
            <th className="pl-4 lg:pl-16 border-b border-gray-200 py-1 lg:py-2 text-left text-[17px] font-bold text-gray-700">
              {tableonehead[2]}
              </th>
            :null}

          </tr>
        </thead>
        <tbody>
          {tabledata.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-white ' : 'bg-white'}
            >
              <td className="w-24 border-b border-gray-200 py-2 lg:py-2 text-[15px] font-medium text-gray-500">
                <h3>{row.feature}</h3>
              </td>
              <td className="pl-4 lg:pl-16 border-b border-gray-200 py-2 lg:py-2 text-[15px] font-semibold text-gray-700">
                {row.col1}
              </td>

              {column=="col2"?
              <td className="pl-4 lg:pl-16 border-b border-gray-200 py-2 lg:py-2 text-[15px] font-semibold text-gray-700">
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
