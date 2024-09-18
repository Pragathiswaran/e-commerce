import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCard = () => {
  const checkProducts = [
    {
      id: 1,
      name: 'OPPO F2S Pro 5G OPPO F2S Pro 5G OPPO F2S Pro 5G OPPO F2S Pro 5G ',
      price: 25000,
      rating: 5,
      image: '/1.jpg',
    },
    {
      id: 2,
      name: 'OPPO F2S Pro 5G',
      price: 25000,
      rating: 5,
      image: '/1.jpg',
    },
    {
      id: 3,
      name: 'OPPO F2S Pro 5G',
      price: 25000,
      rating: 5,
      image: '/1.jpg',
    },
    {
        id: 4,
        name: 'OPPO F2S Pro 5G OPPO F2S Pro 5G OPPO F2S Pro 5G OPPO F2S Pro 5G ',
        price: 25000,
        rating: 5,
        image: '/1.jpg',
      },
      {
        id: 5,
        name: 'OPPO F2S Pro 5G ',
        price: 25000,
        rating: 5,
        image: '/1.jpg',
      },
      {
        id: 6,
        name: 'OPPO F2S Pro 5G',
        price: 25000,
        rating: 5,
        image: '/1.jpg',
      },
  ];

  return (
    <div className='flex flex-wrap mt-40'>
      {checkProducts.map((product) => (
        <div className="w-72 m-10 px-5 py-3 shadow-3xl" key={product.id}>
          <div className="flex justify-center hover:scale-125 ease-in duration-200">
            <img src={product.image} alt="product" className="w-40" />
          </div>
          <div className="text-center font-semibold text-xl mt-5">
            <span className="block text-ellipsis overflow-hidden whitespace-nowrap max-w-full" >
              {product.name}
            </span>
            </div>
          <div className="text-center font-semibold text-xl mt-5">
            <span>{`Rs ${product.price}`}</span>
          </div>
          <div className="text-yellow-500 text-xl text-center mt-1">
            {/* Render the stars dynamically based on the rating */}
            {Array.from({ length: product.rating }).map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} />
            ))}
          </div>
          <div>
            <button className="bg-yellow-500 text-white w-full p-2 mt-5">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
