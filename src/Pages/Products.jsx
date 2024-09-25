import React, { useState } from 'react';
import Data from '../../Data.json'
import Product from '../Components/Product'

const Products = () => {
  const [products, setProducts] = useState(Data.products)

  return (
    <div className="container">
      <h1 className='text-title p-5 d-flex justify-content-center' style={{color: '#999acd', fontWeight:'bold'}}>Popular Product</h1>
      <div className='row row-cols-md-3 g-4 p-5'>
        {
          products.map(p => (
            <Product product = {p}/>
          ))
        }
      </div>
    </div>
  )
}

export default Products
