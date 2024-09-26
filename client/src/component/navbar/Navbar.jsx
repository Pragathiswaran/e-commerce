import React from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Navbar = ({cartItems}) => {
  return (
    <>
   <nav className='fixed top-0 w-full bg-indigo-900 flex justify-between p-4 px-10' >
        <div>
          <Link to={'/'}>
            <img src='/logo.png' alt='amazon' className='w-40' />
          </Link>
        </div>
        <div className='mr-16'>
          <SearchBar />
        </div>
        <div className='my-auto font-semibold text-2xl'>
          <span className='text-yellow-50'>Cart</span>
          <span className='text-gray-900 ml-2 bg-yellow-500 text-xl font-bold px-2 rounded'>{cartItems.length}</span>
        </div>
   </nav>
    </>
  )
}

export default Navbar