import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'

const CartProduct = ({product}) => {
    const {cart, dispatch} = useContext(CartContext)

    const Increase = (id) => {
        const Index = cart.findIndex (p => p.id === id)
        if(cart[Index].quantity < 10){
            dispatch({type: "Increase", id})
        }
    };
    const Decrease = (id) => {
        const Index = cart.findIndex (p => p.id === id)
        if(cart[Index].quantity > 1){
            dispatch({type: "Decrease", id})
        }
    };
  return (
    <div className='d-flex border p-4 mb-3 justify-content-center' style={{borderRadius: '15px'}}>
      <img src={product.thumbnail} className='w-25 h25' alt="" />
      <div className="detail ms-4 mt-3">
        <h4 style={{color: '#989acc', fontWeight: 'bold'}}>{product.title}</h4>    
        <h5 style={{color: '#85bb65', fontWeight: 'bold'}}>${product.price}</h5>
        <div className="buttons d-flex mt-5">
            <button className='rounded-circle px-2 mx-1' style={{backgroundColor: 'white', border: 'solid #989acc'}} onClick={() => Decrease(product.id)}><b style={{color: '#6c757e'}}>-</b></button>
            <button className='rounded mx-1' style={{backgroundColor: 'white', border: 'solid #989acc'}}>{product.quantity}</button>
            <button className='rounded-circle px-2 mx-1' style={{backgroundColor: 'white', border: 'solid #989acc'}} onClick={() => Increase(product.id)}><b style={{color: '#6c757e'}}>+</b></button>
        </div>
        <button className='btn btn-sm btn-warning mt-3' style={{backgroundColor: '#6AD4DD', border: 'none', color: 'white', fontWeight: 'bold'}} onClick={() => dispatch({type: 'Delete', id: product.id})}>Remove</button>
      </div>
    </div>
  )
}

export default CartProduct
