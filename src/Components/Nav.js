import React, { useState } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import logo from './moki-logo.png';
import { FiTruck } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";


function Nav() {
  const [open, setOpen] = useState(false); 
  const handleMenu = () => {
    setOpen(prev => !prev);
  }

  const navLinks = [
    { title: "Shop", link: "/" },
    { title: "Men", link: "/" },
    { title: "Women", link: "/" },
    { title: "Jewelry", link: "/" },
  ];

  return (
    <header className='shadow-lg flex top-0 pt-2 pb-2'>
      <div className='lg:grid grid-cols-3 flex-grow'>
        <div className='flex items-center justify-start px-10'>
          {/* Logo */}
          <img className='cursor-pointer h-[42px] w-[170px]' src={logo}/>
        </div>

        <div className='hidden lg:flex items-center text-xl justify-center '>
          {/* Desktop Menu */}
          {navLinks.map((item, index) => (
            <a className='a group active:scale-90 transition transform mx-16' key={index} href={item.link}><p className='p group-hover:p'>{item.title}</p></a>
          ))}
        </div>

        <div className='hidden lg:flex justify-end items-center space-x-5 pr-10'>
          {/* Desktop Buttons */}
            <button className='hover:scale-110 transition transform active:scale-95 duration-200 ease-in-out'><FiTruck className='h-6 w-6'/></button>
            <button className='hover:scale-110 transition transform active:scale-95 duration-200 ease-in-out'><BsPerson className='h-7 w-6'/></button>
            <button className='hover:scale-110 transition transform active:scale-95 duration-200 ease-in-out'><MdOutlineShoppingBag className='h-6 w-6'/></button>
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
        <div className='absolute top-0 left-0 mt-16 bg-white w-full lg:hidden z-0'>
          {navLinks.map((item, index) => (
            <a className='block transition-all duration-500 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-base font-medium' key={index} href={item.link}>{item.title}</a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Nav;
