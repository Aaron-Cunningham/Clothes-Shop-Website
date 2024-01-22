import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className=''>
        <div className='flex justify-center bg-gray-100 py-4'>
            <h1 className='text-2xl font-bold'>ACCOUNT</h1>
        </div>
        <div className='flex justify-center items-center mt-[22rem]'>
            <div className='w-[25rem] sm:w-[25rem]'>
                <form className='w-full'>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Username*'></input>
                </div>
                <div className='mb-2'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Password*'></input>
                </div>
                <div className=''>
                    <Link to={'/forgot password'}>
                        <p className='cursor-pointer underline hover:opacity-50 transition-all delay-100 mb-7'>Forgot your password?</p>
                    </Link>
                </div>
                <div className='mb-5'>
                    <button className='text-white bg-black w-full py-2 '>SIGN IN</button>
                </div>
                <div className='mb-5'>
                    <p>New to MOKI?</p>
                </div>
                <div>
                    <button className='text-white bg-black w-full py-2'>SIGN UP</button>
                </div>
                </form>
            </div>
        </div>
    </div>

  );
}

export default Login
