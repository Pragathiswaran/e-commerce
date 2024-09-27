import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cartItems, setCartItems}) => {
  return (
    <main className='m-6 my-30'>
        <section className='flex justify-center text-4xl mb-12'>
            <h1>Your Cart: <span>{cartItems.lengt} Items</span></h1>
        </section>
        <section className='flex justify-between w-full my-10'>
            <section className='flex justify-around w-3/4 text-xl '>
            <div className='my-auto'>
                <img src="/images/products/1.png" alt="oppo" className='w-40'/>
            </div>
            <div className='my-auto w-36 text-center '>
                <p>oppo F21s Pro 5G DrawLight Gold, 8GB RAM, 128ROM with on cost EMI/Addtional Exchange offer</p>
            </div>
            <div className='my-auto'>
                <span>$220.56</span>
            </div>
            <div className='my-auto'>
                <button className='bg-red-500 px-2 text-white text-center'>-</button>
                <span className='mx-4'>1</span>
                <button className='bg-blue-500 px-2 text-white text-center'>+</button>
            </div>
            <div className='my-auto'>
                <button className='text-red-500'><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            </section>
            <aside className='border p-2 w-1/4'>
                <div className='text-center mb-8 mt-4'>
                    <h1 className='text-2xl font-semibold'>Order Summary</h1>
                </div>
                <div className='text-center w-full text-md'>
                   <div className='flex justify-around my-3'>
                        <h1> subTotal :</h1><span>1 unit</span>
                   </div>
                    <div className='flex justify-around my-3'>
                        <h1> Est. Total :</h1><span>$234.45</span>
                    </div>
                </div>
                <div className='text-center mb-2 mt-10'>
                    <button className='bg-yellow-500 text-white w-48 py-2 rounded-full'>Place Order</button>
                </div>
             </aside>
        </section>
    </main>
  )
}

export default Cart 
