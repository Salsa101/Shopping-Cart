import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider';

const Product = ({product}) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className='col'>
      <div className="card h-100" style={{borderRadius: '15px'}}>
        <img src={product.thumbnail} class="card-img-top h-75" style={{borderRadius: '15px'}} alt=""/>
        <div className="card-body ps-4 mb-2">
          <h4 className="card-title" style={{color:'#999acd', fontWeight: 'bold'}}>{product.title}</h4>
          <p className="card-text">{product.description}</p>
          <h5 className="card-price" style={{color: '#85bb65', fontWeight: 'bold'}}>${product.price}</h5>
          <button href="#" className="btn btn-primary" style={{backgroundColor: '#6AD4DD', border:'none', fontWeight: 'bold'}} onClick={() => dispatch({type: "Add", product: product})}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Product
