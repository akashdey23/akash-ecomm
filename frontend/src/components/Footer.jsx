import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt='' />
                    <p className='w-full md:w-2/3 text-gray-600'>House of Drips is a Jamshedpur-based online streetwear brand delivering PAN-India. It offers bold, trendy apparel like anime-themed T-shirts, jerseys, gym wear, and printed trousers. With affordable pricing and free shipping, it’s a go-to for youth seeking stylish, edgy outfits to elevate their everyday streetwear game..</p>
                </div>
                <div>
                    <p className='text-xl font-medium  mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Provacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 9142339509</li>
                        <li>akashdey9128@gmail.com</li>
                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025 @ All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer