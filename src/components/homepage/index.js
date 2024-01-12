import React from 'react'
import {Link} from "react-router-dom"
import "./index.css"

const Homepage = () => {
  return (
    <>
    <header className="head">
        <nav className="navbar-items">
            <p><Link to="/homepage/home">Home</Link></p>
            <p><Link to="/homepage/aboutus">About Us</Link></p>
            <p><Link to="/homepage/contactus">Contact Us</Link></p>
        </nav>
    </header>
    <div className="radial">
      
      <h1>Welcome to our site</h1>
    </div>
      
    </>
    
        
    

  )
}

export default Homepage