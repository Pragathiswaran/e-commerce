import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

const SingleProduct = ({cartItems, setCartItems}) => {

    const [product, setProduct ] = useState(null)
    const [productQty, setproductQty ] = useState(1)
    const { id } = useParams()

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_APP_API_KEY}/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data.product))
    },)

    const addToCart = () => {
        const isExitItem = cartItems.find((items) => items.product._id === product._id)
        if(!isExitItem){
            const newCartItem = {product, productQty}
            setCartItems(prevItems => [...prevItems, newCartItem])
        }
    }

    const increaseQty = () => {
        if(product.stock == productQty){
            return;
        }
        setproductQty( prev => prev + 1)
    }

    const decreaseQty = () => {
        if(productQty == 1){
            return;
        }
        setproductQty( prev => prev - 1)
    }

  return product &&
    <main className='flex justify-around mt-40 mb-28 w-full'>
        <aside className='w-1/2'>
            <div className='mx-36'>
                <img src={product.images[0].image} alt="Product Image" className='w-96'/>
            </div>
        </aside>
        <aside className='text-center w-1/2'>
            <div>
                <h1 className='text-dark text-4xl'>
                    {product.name}
                </h1>
                <h6 className='text-md my-5 text-gray-400'>
                    Product #{product._id}
                </h6>      
            </div>
            <hr />
            <div className='my-5 text-2xl text-yellow-500'>
            {Array.from({ length: 5 }).map((_, i) => (
                <FontAwesomeIcon
                  icon={i < product.ratings ? faSolidStar : faRegularStar}
                  key={i}
                />
              ))}
            </div>
            <hr />
            <div className='my-4'>
                <span className='text-3xl text-bold'>$346</span>
            </div>
            <div className='flex justify-center my-5'>
                <div className='mr-6 my-auto'>
                    <button type="button" className='bg-red-500 text-white px-3 py-1'
                    onClick={decreaseQty}
                    >-</button>
                    <span className='mx-3 text-center'>{productQty}</span>
                    <button type="button" className='bg-blue-500 text-white px-3 py-1'
                     onClick={increaseQty}
                    >+</button>
                </div>
                <div className='ml-6'>
                    <button type="button" className='bg-yellow-500 text-white p-2 w-40'
                    onClick={addToCart}
                    disabled={product.stock == 0}
                    >
                        Add to Card
                    </button>
                </div>
            </div>
            <hr />
            <div className='my-4 text-xl'>
                Status : {product.stock < 0 ? 'Out of Stock' : 'In Stock'}
            </div>
            <hr />
            <div className='my-4'>
                <h1 className='text-dark text-2xl mb-2'>
                    Description
                </h1>
                <p>
                    {product.description}
                </p>
            </div> 
            <hr />
            <div className='mt-2'>
                <span>Sold by : {product.seller}</span>
            </div>     
        </aside>
    </main>
}

export default SingleProduct