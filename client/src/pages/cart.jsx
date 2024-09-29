import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { json, Link } from 'react-router-dom';

const Cart = ({cartItems, setCartItems}) => {
    const [completeOrder, setCompleteOrder] = React.useState(false)

    const increaseProductQty = (item) =>{
        if(item.product.stock == item.productQty){
            return ;
        }
       
        const updatedProductQty = cartItems.map((i)=>{
            if(i.product._id == item.product._id ){
                i.productQty++
            }
            return i
        })
        setCartItems(updatedProductQty)
    }

    const decreaseProductQty = (item) => {
        if(item.productQty == 1){
            return ;
        }

        const updatedProductQty = cartItems.map((i)=>{
            if(i.product._id == item.product._id ){
                i.productQty--
            }
            return i
        })
        setCartItems(updatedProductQty)
    }

    const removeProdct = (item) => {
        const updatedProductQty = cartItems.filter((i)=>{
            if(i.product._id !== item.product._id ){
                return true
            }
        })
        setCartItems(updatedProductQty)
    }

    const placeOrderHandler = () => {
        fetch(`${import.meta.env.VITE_APP_API_KEY}/order`,{
            method:'POST',
            headers:{'Content-type' : 'application/json'},
            body:JSON.stringify(cartItems)
        })
        .then(()=>{
            setCartItems([])
            setCompleteOrder(true)
        })

        console.log(cartItems)
    } 

    return cartItems.length > 0 ? <>
            <main className='m-6 my-38'>
            <section className='flex justify-center text-4xl mb-12'>
                <h1>Your Cart: <span>{`${cartItems.length}`} Items</span></h1>
            </section>
            <section className='flex justify-between w-full my-10'>
                <div className='w-2/3 flex flex-col justify-center '>
                    {cartItems.map((items)=>(
                        <>
                            <hr />
                            <section className='flex justify-around text-xl my-10' key={items.product._id}>
                                <div className='my-auto'>
                                    <img src={items.product.images[0].image} alt="oppo" className='w-40'/>
                                </div>
                                <div className='my-auto w-36 text-center text-xl'>
                                    <Link to={`/product/${items.product._id}`}>{items.product.name}</Link>
                                </div>
                                <div className='my-auto'>
                                    <span>${items.product.price}</span>
                                </div>
                                <div className='my-auto'>
                                    <button className='bg-red-500 px-1 text-white text-center text-sm' onClick={() => {decreaseProductQty(items)}}><FontAwesomeIcon icon={faMinus} /></button>
                                    <span className='mx-4'>{items.productQty}</span>
                                    <button className='bg-blue-500 px-1 text-white text-center text-sm' onClick={() => {increaseProductQty(items)}}><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                                <div className='my-auto'>
                                    <button className='text-red-500' onClick={() =>removeProdct(items)}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </section>
                        </>
                    ))}
                </div>
                <aside className='border p-2 w-1/4 max-h-64'>
                    <div className='text-center mb-8 mt-4'>
                        <h1 className='text-2xl font-semibold'>Order Summary</h1>
                    </div>
                    <div className='text-center w-full text-md'>
                    <div className='flex justify-around my-3'>
                        <h1> subTotal :</h1><span>{cartItems.reduce((acc,item)=>(acc + item.productQty),0)} unit</span>
                    </div>
                        <div className='flex justify-around my-3'>
                            <h1> Est. Total :</h1><span>${cartItems.reduce((acc,item)=>(acc + item.product.price * item.productQty),0).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className='text-center mb-2 mt-10'>
                        <button className='bg-yellow-500 text-white w-48 py-2 rounded-full' onClick={placeOrderHandler}>Place Order</button>
                    </div>
                </aside>
            </section>
        </main>
    </> : 
    (completeOrder ? 
        <>
          <div className='text-center my-72'>
            <h1 className='text-4xl font-semibold'>Order Placed</h1>
            <p className='my-1'>Your Order has been placed Successfully</p>
          </div>
        </> : 
        <> 
          <div className='text-center text-4xl my-80'>Your Cart is Empty</div>
        </>
    )
}

export default Cart 
