import React from 'react'
import { MdOutlineEmail, MdOutlineLocalPhone, MdOutlineLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className='bg-gray-200 pt-6'>
        <div className='mx-auto max-w-screen-xl md:flex md:items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                <div className='mb-1'>
                    <h1 className=' font-semibold mb-3 underline ml-2'>Contact</h1>
                    <ul className=' flex flex-col mb-4 ml-1 text-gray-600'>
                        <li className='mb-2 flex items-center'><MdOutlineLocationOn className='mr-[3px] h-5 w-5'/> 123 Baker Street, London, W1U 6AG, United Kingdom</li>
                        <li className='mb-2 flex items-center'><MdOutlineEmail className='mr-2 h-4 w-4'/> mokisupport@moki.com</li>
                        <li className='flex items-center'><MdOutlineLocalPhone className='mr-2 h-4 w-4'/> +44 (0) 20 7946 0321</li>
                    </ul>
                </div>
                <div className='ml-2'>
                    <h1 className='font-semibold mb-3 underline '>Customer Care</h1>
                    <ul className=' flex flex-col mb-4 text-gray-600'>
                        <li className='mb-2 flex items-center'> Exchanges & Returns</li>
                        <li className='mb-2 flex items-center'> FAQs</li>
                        <li className='flex items-center'> Contact Us</li>
                    </ul>
                </div>
                <div className='ml-2'>
                    <h1 className='font-semibold mb-3 underline '>Information</h1>
                    <ul className=' flex flex-col mb-4 text-gray-600'>
                        <li className='mb-2 flex items-center'> About us</li>
                        <li className='mb-2 flex items-center'> Privacy Policy</li>
                        <li className='flex items-center mb-2'> Payments</li>
                        <li className='flex items-center mb-2'> Store Locator</li>
                        <li className='flex items-center'> Blogs</li>
                    </ul>
                </div>
                <div className='ml-2'>
                    <h1 className='font-semibold mb-3 underline '>News letter</h1>
                    <ul className=' flex flex-col mb-4 text-gray-600'>
                        <li className='mb-2 flex items-center'> Exchanges & Returns</li>
                        <li className='mb-2 flex items-center'> FAQs</li>
                        <li className='flex items-center'> Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex justify-center flex-1 bg-white pb-2 pt-2'>
            <p className='text-gray-400 text-xs'>© COPYRIGHT 2024 MOKI</p>
        </div>
    </footer>
  )
}

export default Footer