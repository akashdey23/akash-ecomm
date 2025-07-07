import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import "../index.css"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center font-medium py-5">
      <img src={assets.logo} alt="Logo" className="w-36" />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink className='flex flex-col item-center gap-1'>
        <p>Home</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
