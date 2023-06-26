import React from 'react';


export default function EmpTable({ empData }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden m-2 border shadow-md">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-400 font-medium text-blacj dark:border-neutral-500 dark:bg-neutral-900">
                <tr className='text-lg  '>
                  <th scope="col" className="py-3">
                    NO
                  </th>
                  <th scope="col" className="py-3">
                  Company Name
                  </th>
                  <th scope="col" className="py-3">
                 Email
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                {empData.map((emp, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-lg">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap font-bold text-lg px-6 py-4">{emp.cmpName}</td>
                    <td className="whitespace-nowrap font-bold text-lg px-6 py-4">{emp.email}</td>
                 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
