import React, { useState } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";

function Nav() {
  const [open, setOpen] = useState(false); 
  const handleMenu = () => {
    setOpen(prev => !prev);
  }

  const navLinks = [
    { title: "Shop", link: "/" },
    { title: "Men", link: "/" },
    { title: "Women", link: "/" },
    { title: "Kids", link: "/" },
  ];

  return (
    <header className='shadow-lg flex sticky top-0'>
      <div className='lg:grid grid-cols-3 flex-grow'>
        <div className='flex items-center justify-start px-10'>
          {/* Logo */}
          <img className='cursor-pointer my-auto h-36' src='https://images-platform.99static.com/w-eJ4ikqQb11PSWgRmwSQ48bEYo=/355x7:1146x798/500x500/top/smart/99designs-contests-attachments/81/81968/attachment_81968805'/>
        </div>

        <div className='hidden lg:flex flex-grow justify-evenly items-center text-xl font-semibold text-gray-600'>
          {/* Desktop Menu */}
          {navLinks.map((item, index) => (
            <a className='a group active:scale-90 transition transform ' key={index} href={item.link}><p className='p group-hover:p'>{item.title}</p></a>
          ))}
        </div>

        <div className='hidden lg:flex justify-end items-center space-x-10 px-10'>
          {/* Desktop Buttons */}
          <button className='border-gray-400 text-gray-700 p-4 rounded-full border-2 active:scale-110 transition duration-120 ease-in-out transform px-10'>Login</button>
          <button className='bg-red-500 p-4 px-10 rounded-full text-white active:scale-110 transition duration-120 ease-in-out transform'>Sign up</button>
        </div>

      </div>
      

      {/* Mobile Menu Button */}
      <div className='flex items-center px-10 cursor-pointer lg:hidden z-1'>
        <button type='button' onClick={handleMenu} className='z-10'>
          <span className='sr-only'>Open main menu</span>
          {open ? <FaTimes className='w-8 h-8' /> : <FaBars className='w-8 h-8'/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='absolute top-0 left-0 mt-32 bg-white w-full lg:hidden z-0'>
          {navLinks.map((item, index) => (
            <a className='block transition-all duration-500 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-base font-medium' key={index} href={item.link}>{item.title}</a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Nav;
