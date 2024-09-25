import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row" style={{color: '#00cdcc'}}>
          <div className="col-lg-6 col-md-12 text-center mt-1">
            <h5 className="text-uppercase" style={{fontWeight: 'bold'}}>Bina Nusantara University</h5>
            <p>
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 text-center mt-1">
            <h5 className="text-uppercase" style={{fontWeight: 'bold'}}>Follow me on</h5>
            <a href="https://facebook.com" className="me-4" style={{color: '#00cdcc'}} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" className="me-4" style={{color: '#00cdcc'}} target="_blank" rel="noopener noreferrer">Twitter/X</a>
            <a href="https://instagram.com" style={{color: '#00cdcc'}} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: '#999acd' }}>
        <small style={{color: 'white'}}>
          Designed with ❤️ by Afrida Salsabila Putri
        </small>
      </div>
    </footer>
  )
}

export default Footer
