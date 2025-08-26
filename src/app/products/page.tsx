import React from 'react'

import getProducts from '@/APIs/products.api'
import SingleProduct from './../_components/SignleProduct/SingleProduct';

export default async function Products() {

  let data = await getProducts();
  return (
    <div className='container w-[80%] mx-auto mt-4'>
      <div className='flex flex-wrap'>
        {data.map(currentProduct=>
          <SingleProduct key={currentProduct.id} product ={currentProduct}/>)
        }
      </div>
    </div>
  )
}
