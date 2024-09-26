import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

  return (
     <div className="w-72 m-10 px-5 py-3 shadow-3xl" key={product.id}>
          <div className="flex justify-center hover:scale-110 ease-in duration-200">
            <img src={product.images[0].image} alt="product" className="w-40 h-40" />
          </div>
          <div className="text-center font-semibold text-xl mt-5">
            <span className="block text-ellipsis overflow-hidden whitespace-nowrap max-w-full" >
            <Link to={`/product/${product._id}`}>{product.name}</Link>
            </span>
            </div>
          <div className="text-center font-semibold text-xl mt-5">
            <span>{`Rs ${product.price}`}</span>
          </div>
            <div className="text-yellow-500 text-xl text-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FontAwesomeIcon
                  icon={i < product.ratings ? faSolidStar : faRegularStar}
                  key={i}
                />
              ))}
            </div>
          <div>
            <button className="bg-yellow-500 text-white w-full p-2 mt-5">
              <Link to={`/product/${product._id}`}>View Product</Link>
            </button>
          </div>
        </div>
  );
};

export default ProductCard;
