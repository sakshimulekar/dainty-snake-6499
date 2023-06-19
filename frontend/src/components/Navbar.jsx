import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Log out</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">cart</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/subscribe">subscribe</Link>
      <Link to="/getsubscription">purchase</Link>
     <h1 style={{color:"red"}}>Admin</h1>
    </div>
  )
}

export default Navbar
