import React from 'react';


export default function UserTable({ userData,change }) {
  
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden m-2 border shadow-md">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-400 font-medium text-black dark:border-neutral-500 dark:bg-neutral-900">
                <tr className='md:text-lg  '>
                  <th scope="col" className="py-3">
                    NO
                  </th>
                  <th scope="col" className="py-3">
                    Name
                  </th>
                  <th scope="col" className="py-3">
                 Email
                  </th>
                  <th scope="col" className="py-3">
                 Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap md:px-6 md:py-4 px-2 py-2 font-bold md:text-lg">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap font-bold md:text-lg md:px-6 px-2 md:py-4">{user.name}</td>
                    <td className="whitespace-nowrap font-bold md:text-lg md:px-6 px-2 md:py-4">{user.email}</td>
                    <td className="whitespace-nowrap font-bold ">
                      <button onClick={()=>change(user._id,user.status?"false":"true")} className={`${user.status?"bg-red-700":"bg-green-600"} md:text-lg md:px-3 px-2 md:py-2 text-white rounded-md `}>{user.status?"block":"UnBlock"}</button>
                    </td>
                 
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
