import React from 'react'

const Navbar = () => {
  return (
    <>
   <nav className='bg-indigo-900 flex justify-between p-4 px-10' >
        <div>
          <a>
            <img src='/logo.png' alt='amazon' className='w-40' />
          </a>
        </div>
        <div className='mr-16'>
          <input type='text' placeholder='Enter the product Name'
            className='w-96 p-2 pl-5 outline-0 rounded-l'
          />
          <button className='bg-yellow-500 py-2 rounded-r'>Search</button>
        </div>
        <div className='my-auto font-semibold text-2xl'>
          <span className='text-yellow-50'>Cart</span>
          <span className='text-gray-900 ml-2 bg-yellow-500 text-xl font-bold px-2 rounded'>0</span>
        </div>
   </nav>
    </>
  )
}

export default Navbar