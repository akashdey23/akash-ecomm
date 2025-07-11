import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import "../index.css"
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const {setShowSearch} = useContext(ShopContext);

  return (
    <div className="flex justify-between items-center font-medium py-5">
      <Link to={'/'}><img src={assets.logo} alt="Logo" className="w-36" /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink className='flex flex-col items-center gap-1' to='/'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1' to='/collection'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1' to='/about'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1' to='/contact'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={()=>(setShowSearch(true))} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative' >
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt=""/>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img
        onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
      </div>
    {/* sidebar menu for small screens */}
    <div className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
    visible ? 'translate-x-0' : 'translate-x-full'
  } z-50`}>
        <div className='flex flex-col text-gray-600 '>
            <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={()=>setVisible(false)}>
              <img src={assets.dropdown_icon} className='h-4 rotate-180'/>
              <p>Back</p>
            </div>
            <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
            <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/about'>About</NavLink>
            <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
        </div>
    </div>
    </div>
  )
}

export default Navbar
