import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login({ setLoggedIn }) {
    console.log("Login component rendered");
    const [usernameLog, setUsernameLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/loggedin", {
            username: usernameLog,
            password: passwordLog,
        }).then((response) => {
            if (response.data.message) {
                // User entered wrong credentials
                console.log("Login failed:", response.data.message);
                setLoginStatus(response.data.message);
            } else {
                // Correct credentials
                setLoggedIn(true);
            }
        });
    };

  return (
    <div className=' mb-10'>
        <div className='flex justify-center bg-gray-100 py-4'>
            <h1 className='text-2xl font-bold'>ACCOUNT</h1>
        </div>
        <div className='flex justify-center items-center mt-[3rem] md:mt-[15rem]'>
            <div className='w-[20rem] sm:w-[25rem]'>
                <form className='w-full' onSubmit={loginUser}>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Email*' onChange={(e) => {setUsernameLog(e.target.value)}}></input>
                </div>
                <div className='mb-2'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Password*' type='password' autoComplete='current-password' onChange={(e) => {setPasswordLog(e.target.value)}}></input>
                </div>
                <div className=''>
                    <Link to={'/reset'}>
                        <p className='cursor-pointer underline hover:opacity-50 transition-all delay-100 '>Forgot your password?</p>
                    </Link>
                </div>
                <div>
                    <h1 className=' text-red-500 mb-5 mt-1'>{loginStatus}</h1>
                </div>
                <div className='mb-5'>
                    <button className='text-white bg-black w-full py-2 transform transition-all hover:opacity-80 active:scale-95 ease-in-out'>SIGN IN</button>
                </div>
                <div className='mb-5'>
                    <p>New to MOKI?</p>
                </div>
                <div>
                    <Link to={'/register'}>
                    <button className='text-white bg-black w-full py-2 transform transition-all hover:opacity-80 active:scale-95 ease-in-out'>CREATE AN ACCOUNT</button>
                    </Link>
                </div>
                </form>
            </div>
        </div>
    </div>

  );
}

export default Login
