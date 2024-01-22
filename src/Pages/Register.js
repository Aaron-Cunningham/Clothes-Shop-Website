import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='mb-20'>
        <div className='flex justify-center bg-gray-100 py-4'>
            <h1 className='text-2xl font-bold'>REGISTER</h1>
        </div>
        <div className='flex justify-center items-center mt-[15rem]'>
            <div className='w-[25rem] sm:w-[25rem]'>
                <form className='w-full'>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Name'></input>
                </div>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Email*'></input>
                </div>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Password*'></input>
                </div>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Comfirm Password*'></input>
                </div>
                <div className='mb-5'>
                    <button className='text-white bg-black w-full py-2 transform transition-all hover:opacity-80 active:scale-95 ease-in-out'>SIGN IN</button>
                </div>
                <div className='mb-5'>
                    <Link to={'/login'}>
                    <p className=' underline cursor-pointer'>Already have an account? Login here</p>
                    </Link>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register