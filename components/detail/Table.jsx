import React from 'react'

export default function Table({tableonehead, tabledata, column}) {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-3 mb-3">

    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-1 lg:py-2 text-left text-sm font-semibold text-gray-800">
              {tableonehead[0]}
            </th>
            <th className="border border-gray-300 px-4 py-1 lg:py-2 text-left text-sm font-semibold text-gray-800">
            {tableonehead[1]}
            </th>

            {column=="col2"?
            <th className="border border-gray-300 px-4 py-1 lg:py-2 text-left text-sm font-semibold text-gray-800">
              {tableonehead[2]}
              </th>
            :null}

          </tr>
        </thead>
        <tbody>
          {tabledata.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className="border border-gray-300 px-4 py-1 lg:py-2 text-sm text-gray-800">
                <h3>{row.feature}</h3>
              </td>
              <td className="border border-gray-300 px-4 py-1 lg:py-2 text-sm text-gray-800">
                {row.col1}
              </td>

              {column=="col2"?
              <td className="border border-gray-300 px-4 py-1 lg:py-2 text-sm text-gray-800">
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
