import React from 'react'
import { Link } from 'react-router-dom'
import DashStates from './DashStates'

export default function DashBoard() {
  return (
    <div className='flex gap-4'>
      <DashStates/>
       
    </div>
  )
}
