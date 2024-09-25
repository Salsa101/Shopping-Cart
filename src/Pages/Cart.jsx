import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProduct from '../Components/CartProduct'
import { totalItems, totalPrice } from '../Features/CartReducer'
import img1 from '../image/oops.png'

const Cart = () => {
  const {cart} = useContext(CartContext)

  if (cart.length === 0) {
    return (
      
        <div className=" alert alert-warning text-center d-flex justify-content-center align-items-center" style={{height: '100vh', backgroundColor: 'white', border: 'none'}} role="alert">
          <div className='container-fluid px-4 py-2'>
            <div className="row">
              <div className="col-12">
                <img src={img1} alt="" style={{height: '60vh'}} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              <p className='fs-5'>Your cart is empty. Tap the button below to begin shopping!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <a href="/" className='btn btn-primary btn-lg' style={{backgroundColor: '#6AD4DD', border: 'none', fontWeight: 'bold'}}>Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      
    )
  }

  return (
    <div className='container-fluid mt-3 px-4 py-2' style={{height: '100vh'}}>
      <h1 className='d-flex justify-content-center align-items-center p-5 mb-3' style={{fontWeight: 'bolder', color: '#696969'}}>- My Cart -</h1>
      <div className='row'>
        <div className='col-8'>
          {cart.map(p => (
            <CartProduct product = {p}></CartProduct>
          ))}
          
        </div>
        <div className="col-4 ">
          <div className="p-2" style={{backgroundColor: '#989acc', borderRadius: '15px'}}>
            <h2 className='d-flex justify-content-center align-items-center mb-5 p-3' style={{color: '#F0F0F0'}}>Cart Summary</h2>
            <h5 className='ps-4 text-white'>Total Items: {totalItems(cart)}</h5>
            <h5 className='ps-4 text-white'>Total Price: ${totalPrice(cart)}</h5>
            <button className='btn btn-warning mt-4 ms-4 mb-3 text-white' style={{backgroundColor: '#6AD4DD', fontWeight: 'bold', border: 'none'}}>Checkout</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
