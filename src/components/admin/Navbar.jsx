import React ,{ Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
    let navigate=useNavigate()
    const logout=()=>{
      localStorage.removeItem("adminJwt");

navigate("/admin/login")
    }
  return (
    <div className='bg-white h-16 px-4 shadow-md mb-4   flex justify-between items-center'>
    <div>
 

        </div> 
    <div className=' flex flex-rcol items-center gap-2 mr-2'>
    <Popover className="relative me-3 co+">
      <Popover.Button className="font-black text-lg  focus:outline-none   active:bg-slate-400  bg">ADMIN</Popover.Button>

      <Popover.Panel className="absolute mt-1 z-10">
        <div className="grid  font-semibold   grid-cols-1">
          <a className=' hover:bg-slate-900 hover:text-white p-1 ' href="/analytics">PROFILE</a>
          <button type='button' onClick={logout} className=' hover:bg-slate-900 hover:text-white p-1'>LOGOUT</button>
        </div>

  
      </Popover.Panel>
    </Popover>
        </div> 
    </div>
  )
}
