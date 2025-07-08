import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
//   console.log("Products from context:", products);

  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    // console.log("Best Sellers:", bestProduct);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST "} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-x5 text-xs sm:text-sm md:text-base text-gray-600">
          Shop our most-loved pieces that everyone’s talking about. These styles never go out of trend!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4">
        {bestseller.length === 0 ? (
          <p className="text-center text-red-500 col-span-full">
            No Best Sellers Found
          </p>
        ) : (
          bestseller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BestSeller;
