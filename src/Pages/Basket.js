import React from 'react'
import { PiShoppingCart } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Basket() {
  return (
<div className=''>
        <div className='flex justify-center bg-gray-100 py-4'>
            <h1 className='text-2xl font-bold'>BASKET</h1>
        </div>
        <div className='flex justify-center mt-[2rem] items-center md:mt-[10rem]'>
            <div className='flex flex-col w-[20rem] sm:w-[60rem]'>
                <form className='flex flex-col md:flex-row md:justify-around items-center'>
                    <div>
                        <div className='mb-3 text-center'>
                                <h1 className='font-bold text-xl'>
                                    SUBTOTAL: 0.00 GBP
                                </h1>
                            </div>

                            <div className='mb-20'>
                                <button className='bg-black text-white px-1 py-2 w-full transform transition-all hover:opacity-80 active:scale-95 ease-in-out'>CHECKOUT</button>
                            </div>
                            <div className='flex justify-center mb-5'>
                                <PiShoppingCart className='h-24 w-24'/>
                            </div>
                            <div className='flex flex-col justify-center text-center mb-10'>
                                <h1 className='text-xl font-semibold'>YOUR SHOPPING CART IS EMPTY</h1>
                                <p className='text-gray-500'>Before you can proceed to checkout you need to have items in your Basket</p>
                            </div>
                            <div className=''>
                                <Link to={'/'}><button className='bg-black text-white py-2 w-full transform transition-all hover:opacity-80 active:scale-95 ease-in-out'>Return to the shop</button></Link>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Basket