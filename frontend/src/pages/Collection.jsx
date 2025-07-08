import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react';
import { assets } from '../assets/assets';

const Collection = () => {

  const {products} = useContext(ShopContext); 
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}

      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}` } src={assets.dropdown_icon} alt=''/>
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Men'} />MEN
            </p>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Women'} />WOMEN
            </p>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Kids'} />KIDS
            </p>
          </div>

        </div>
        {/* SUBCATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Topwear'} />TOPWEAR
            </p>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Bottomwear'} />BOTTOMWEAR
            </p>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Winterwear'} />WINTERWEAR
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Collection