import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios  from 'axios'

function Register() {

    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    //Posting the username and password to be registered
    const register = () => {
        console.log("Working")
        Axios.post('http://localhost:3001/register', {
            username: usernameReg, password:passwordReg, firstName: firstName, lastName:lastName
        }).then(response =>{
            console.log(response)
        })
    }



  return (
    <div className='mb-[3rem]'>
        <div className='flex justify-center bg-gray-100 py-4'>
            <h1 className='text-2xl font-bold'>REGISTER</h1>
        </div>
        <div className='flex justify-center items-center mt-[3rem] md:mt-[15rem]'>
            <div className='w-[20rem] sm:w-[25rem]'>
                <form className='w-full' onSubmit={register}>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='First Name' onChange={(e) => {setFirstName(e.target.value)}}></input>
                </div>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Last Name' onChange={(e) => {setLastName(e.target.value)}}></input>
                </div>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Email*' onChange={(e) => {setUsernameReg(e.target.value)}}></input>
                </div>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Password*' autoComplete='current-password' type='password' onChange={(e) => {setPasswordReg(e.target.value)}}></input>
                </div>
                <div className='mb-8'>
                    <input className='w-full border px-3 py-2 placeholder:text-gray-500 border-gray-400' placeholder='Comfirm Password*' type='password'></input>
                </div>
                <div className='mb-5'>
                    <button className='text-white bg-black w-full py-2 transform transition-all hover:opacity-80 active:scale-95 ease-in-out' onClick={register}>REGISTER</button>
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