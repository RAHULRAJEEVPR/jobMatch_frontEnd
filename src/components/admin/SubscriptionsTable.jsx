import React from 'react'
import momemnt from "moment"

export default function SubscriptionsTable({data}) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden m-2 border shadow-md">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-400 font-medium text-black dark:border-neutral-500 dark:bg-neutral-900">
                <tr className="md:text-lg  ">
                  <th scope="col" className="py-3">
                    NO
                  </th>
                  <th scope="col" className="py-3">
                    emp/company
                  </th>
                  <th scope="col" className="py-3">
                    pack
                  </th>
                  <th scope="col" className="py-3">
                    orderId
                  </th>
                  <th scope="col" className="py-3">
                    Date
                  </th>
                 
                  
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <tr key={index} className="border-b bg-white dark:border-neutral-500">
                    <td className="whitespace-nowrap md:px-6 md:py-4 px-2 py-2 font-bold md:text-lg">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap font-mono md:text-lg md:px-6 px-2 md:py-4">
                      {data.empId.cmpName}
                    </td>
                    <td className="whitespace-nowrap first-letter  font-mono md:text-lg md:px-6 px-2 md:py-4">
                      {data.pack}
                    </td>
                    <td className="whitespace-nowrap font-bold  md:text-lg md:px-6 px-2 md:py-4">
                    <span className='font-mono'>  {data.orderId}   </span>
                    </td>
                    <td className="whitespace-nowrap font-bold  md:text-lg md:px-6 px-2 md:py-4">
                    <span className='font-mono'>  {momemnt(data.createdAt).format("MMM Do YY")}   </span>
                    </td>
                   
                   
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
