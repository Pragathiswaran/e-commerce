import React, { useEffect, useState } from 'react';
import ProductCard from '../component/product/ProductCard'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [productData, setProductData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_APP_API_KEY}/products?${searchParams}`)
    .then(res=>res.json())
    .then(data => setProductData(data.products))
  },[searchParams]) 

  return (
    <>
        <div className='text-center text-3xl text-dark mt-40'>
            <span>Latest prodcuts</span>
        </div>
        <div className='flex flex-wrap my-10 mx-5'>
            {productData.map(product => <ProductCard product={product}/>)}
        </div>
    </>
  )
}

export default Home