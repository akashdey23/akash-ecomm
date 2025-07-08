import React, { useContext } from 'react'
import Home from '../pages/Home'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { useState,useEffect } from 'react';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    // console.log(products);

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
      setLatestProducts(products.slice(0,10));
    
      
    }, []) // empty aarray becuz , executed  only once when it is loaded
    

    

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our latest collections crafted with elegance and precision. Redefine your style with pieces designed for every occasion.
            </p>
        </div>
        {/* Rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </div>
    </div>
  )
}

export default LatestCollection