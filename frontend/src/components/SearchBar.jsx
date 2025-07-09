import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const SearchBar = () => {
  const {search, setSearch,  showSearch, setShowSearch} = useContext(ShopContext)
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if(location.pathname.includes('collection' ) && showSearch){
        setVisible(true);
    }
    else{
        setVisible(false);
    }
    
  }, [location,showSearch])
  
    return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center border border-gray-400 justify-center px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 md:'>
            <input type='text' placeholder='search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e)=>(e.target.value)}/>
            <img src={assets.search_icon} alt=''  className='w-5 h-5 sm:w-6 sm:h-6 cursor-pointer'/>
        </div>
        <img src={assets.cross_icon} className='inline w-3  cursor-pointer' alt='' onClick={(e)=>(setShowSearch(false))} />
    </div>
  ) : null
}

export default SearchBar