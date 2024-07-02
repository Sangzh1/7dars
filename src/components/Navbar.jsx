import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container mt-30 mb-20 flex justify-between items-center pt-12'>
      <h3 className='text-3xl font-bold cursor-pointer'>LOGO</h3>
      <nav className='flex gap-5'>
        <Link className='font-medium text-xl text-black' to='/'>
          {' '}
          Home
        </Link>
        <Link className='font-medium text-xl text-black' to='/about'>
          About
        </Link>
        <Link className='font-medium text-xl text-black' to='/contact'>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
