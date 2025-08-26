import React from 'react'

export default function ProductDetails({product}) {
  return (
    <>
        <div className='container w-full w-[70%] p-4 flex my-4 mx-auto items-center'>
        <div className="w-full md:w-1/4 p-4">
        <img src={product.imageCover} alt="" className='w-full'/></div>
        <div className="w-full md:w-3/4 p-4">
            <h1 className='text-2xl font-bold text-emerald-950 my-4'>{product.title}</h1>
            <p>{product.description}</p>
            <p className='text-emerald-600 my-2'>{product.category.name}</p>
            <div className='flex justify-between w-full my-4'>
            <div>{product.price} EGP</div>
            <div>{product.ratingsAverage}<i className='fas fa-star text-yellow-400'></i></div>
            </div>
            <button className='rounded-md p-2 m-2 w-full cursor-pointer bg-emerald-700 hover:bg-emerald-900 text-white font-bold'>Add to Cart</button>
        </div>
        </div>
    </>
  )
}
