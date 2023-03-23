import logo from "./assets/images/logo.png"
import cart from "./assets/images/cart.png"
import search from "./assets/images/search.png"
import React from "react"


export default function Header  () {
    return (
      <div className= "head"> 
            <img src={logo} className="logo" alt="logo e-commerce" />
            <input placeholder= "Search you products"></input>
            <img src={search} className="search" alt="search product" />
            <img src={cart} className="Cart" alt="cart" />
       
      </div>
    )
  } git 