import React from 'react'

function Loaders() {
  return (
    <div className="bg-gray-200  w-full min-h-screen flex justify-center items-center">
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-200">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
        <div className="h-9 w-24 rounded-full bg-gray-200"></div>
      </div>
    </div>
  </div>
  )
}

export default Loaders