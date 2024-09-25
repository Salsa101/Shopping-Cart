import React, { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../Features/ContextProvider'

const Navbar = () => {
  const {cart} = useContext(CartContext)
  return (
    <nav className="navbar navbar-expand-fluid sticky-top" style={{ backgroundColor: '#9a9bce' }}>
        <div className="container-fluid">
              <Link to='/' className="logoName p-2 fw-bold d-flex h3 me-4 text-decoration-none" style={{color: 'white'}}>Shopping Cart</Link>
              <a className="" href="#"></a>
          <div className="search d-flex col-7">
            <input type="text" className="form-control d-flex" placeholder="Search Product..." aria-label="Search" style={{borderColor: '#999acd'}}/>
          </div>

          <div className="btn cart d-flex">
            <Link to='/cart' className='navbar-link d-flex fs-5 p-2 ms-2' style={{color: 'white', fontWeight: 'bold'}}><BsCart/>{cart.length}</Link>
          </div>

          <div className="divider-d-flex"></div>

          <div className="button-login d-flex">
            <button type="button" className="btn btn-primary me-2 m-1" style={{backgroundColor: '#9a9bce', color: '#6AD4DD', border: 'solid 2px #6AD4DD', fontWeight: 'bolder'}}>Sign In</button>
            <button type="button" className="btn btn-secondary m-1" style={{backgroundColor: '#6AD4DD', border: 'none', fontWeight: 'bolder'}}>Sign Up</button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
