import React from 'react'

export default function DashStates() {
  return (
    <div className=' mx-2 flex gap-4 w-full' >
     <BoxWrapper>A</BoxWrapper>
     <BoxWrapper>B</BoxWrapper>
     <BoxWrapper>C</BoxWrapper>
     <BoxWrapper>D</BoxWrapper>
    </div>
  )
}

function BoxWrapper({children}){
    return  <div className="bg-white rounded-sm p-4 flex-1 border  border-gray-200 flex items-center"> {children}</div>

}