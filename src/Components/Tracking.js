import React from 'react'

function Tracking() {
  return (
    <div>
        <div className='flex justify-center bg-gray-100 py-4'>
            <h1 className='text-2xl font-bold'>Track your order</h1>
        </div>
        <div className='flex justify-center items-center mt-[8rem]'>
            <div className='flex flex-col w-[20rem] sm:w-[60rem]'>
                <form className='flex flex-col md:flex-row md:justify-around items-center'>
                    <div className='flex flex-col text-center justify-center'>
                        <div className='mb-3'>
                            <p className='text-gray-500'>Enter order number</p>
                        </div>
                        <div className='mb-6'>
                            <input className='border-black border w-full py-1'/>
                        </div>
                        <div className='mb-3'>
                            <p className='text-gray-500'>
                                Enter Email Address:
                            </p>
                        </div>
                        <div className='mb-6'>
                            <input className='border border-black px-12 py-1'/>
                        </div>
                        <div>
                            <button className='bg-black text-white px-12 py-2'>ORDER TRACK BY EMAIL</button>
                        </div>
                        
                    </div>
                    <div className='flex  flex-col text-center justify-center'>
                        <div className='mt-10 mb-10'>
                            <h1 className='text-black font-bold text-lg'>
                                OR
                            </h1>
                        </div>
                    </div>
                    <div>
                        <div className='mb-3 text-center'>
                                <p className='text-gray-500'>
                                    Enter order Number:
                                </p>
                            </div>
                            <div className='mb-6'>
                                <input className='border border-black px-12 py-1'/>
                            </div>
                            <div>
                                <button className='bg-black text-white px-1 py-2 w-full'>ORDER TRACK BY #NUM</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default Tracking