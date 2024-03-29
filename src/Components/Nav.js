import React, { useState } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import logo from './moki-logo.png';
import { FiTruck } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Nav({loggedIn, setLoggedIn}) {
  const [open, setOpen] = useState(false); 
  const handleMenu = () => {
    setOpen(prev => !prev);
  }
  const navLinks = [
    { title: "Shop", link: "/" },
    { title: "Men", link: "/mens" },
    { title: "Women", link: "/women" },
    { title: "Jewelry", link: "/" },
  ];
  return (
    <header className='shadow-lg flex top-0 pt-2 pb-2 '>
      <div className='lg:grid grid-cols-3 flex-grow'>
        <div className='flex items-center justify-start px-10'>
          {/* Logo */}
          <Link to={'/'}>
            <img className='cursor-pointer h-[42px] w-[170px]' src={logo}/>
          </Link>
        </div>

        <div className='hidden lg:flex items-center text-xl justify-evenly '>
          {/* Desktop Menu */}
          {navLinks.map((item, index) => (
            <Link to={item.link} className='a group active:scale-90 transition transform mx-16'><p className='p group-hover:p'>{item.title}</p></Link>
          ))}
        </div>
        
        {loggedIn ? (
            <div className='hidden lg:flex justify-end items-center space-x-5 pr-10'>
            {/* Desktop Buttons */}
              <Link to={'/basket'}>
                <button className='hover:scale-110 transition transform active:scale-95 duration-200 ease-in-out'><MdOutlineShoppingBag className='h-6 w-6'/></button>
              </Link>
              <Link to={'/tracking'}>
                <button className='hover:scale-110 transition transform active:scale-95 duration-200 ease-in-out'><FiTruck className='h-6 w-6'/></button>
              </Link>
  
              <Link to='/account'>
                <button className='hover:scale-110 transition transform active:scale-95 duration-200 ease-in-out'><BsPerson className='h-7 w-6'/></button>
              </Link>
              {loggedIn ? (
          <div className='block transition-all duration-500 text-white bg-black hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
            <Link to="/" onClick={(e) => {setLoggedIn(false)}}><p>Logout</p></Link>
          </div>

        ) : ( <div></div>)}
  
          </div>
        ) : (
          <div className='hidden lg:flex justify-end items-center space-x-5 pr-10'>
          {/* Desktop Buttons */}
            <Link to={'/basket'}>
              <button className='hover:scale-110 transition transform active:scale-95 duration-200 ease-in-out'><MdOutlineShoppingBag className='h-6 w-6'/></button>
            </Link>
            <Link to={'/tracking'}>
              <button className='hover:scale-110 transition transform active:scale-95 duration-200 ease-in-out'><FiTruck className='h-6 w-6'/></button>
            </Link>

            <Link to='/login'>
              <button className='hover:scale-110 transition transform active:scale-95 duration-200 ease-in-out'><BsPerson className='h-7 w-6'/></button>
            </Link>

        </div>

        )

        }


      </div>
      

      {/* Mobile Menu Button */}
      <div className='flex items-center px-10 cursor-pointer lg:hidden'>
        <button type='button' onClick={handleMenu} className='z-10'>
          {open ? <FaTimes className='w-8 h-8' /> : <FaBars className='w-8 h-8'/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='absolute top-0 left-0 mt-14 bg-white w-full lg:hidden z-50'>
          {navLinks.map((item, index) => (
            <a className='block transition-all duration-500 hover:bg-black hover:text-white px-3 py-2 rounded-md text-base font-medium' key={index} href={item.link} >{item.title} </a>
          ))}

        <div className='block transition-all duration-500 hover:bg-black hover:text-white px-3 py-2 rounded-md text-base font-medium'>
          <Link to="tracking"><button className='w-full text-left ' onClick={handleMenu}>Tracking</button></Link>

        </div>
        <div className='block transition-all duration-500 hover:bg-black hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
          <Link to="/basket"><button className='w-full text-left ' onClick={handleMenu}>Basket</button></Link>
        </div>
        <div className='block transition-all duration-500  hover:text-white px-3 py-2 rounded-md text-base font-medium'>
          {loggedIn ? (
            <Link to="/account"><button className='w-full text-left hover:bg-black' onClick={handleMenu}>Account</button></Link>
          ) : (<div></div>)}
        </div>
        {loggedIn ? (
          <div className='block transition-all duration-500 hover:bg-black hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
            <Link to="/" onClick={(e) => {setLoggedIn(false)}}><p>Logout</p></Link>
          </div>

        ) : ( 
          <div className='block transition-all duration-500 hover:bg-black hover:text-white px-3 py-2 rounded-md text-base font-medium'>
            <Link to="/login"><button className='w-full text-left ' onClick={handleMenu}>Login</button></Link>
          </div>)}
        </div>
      )}
    </header>
  );
}

export default Nav;
