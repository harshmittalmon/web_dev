import React from "react";
import basket from "../assets/basket.svg";
export default function Header() {
  return (
    <div class="header flex space-around">
      <div className= {`main-logo flex align-center  `}>
        <span> <div>Your's</div><div>Basket</div></span>
        <img src={basket} alt="" />
      </div>

      <nav className="header-nav flex justify-center">
        <span className="home-link">Home</span>
        <span className="category-link">Categories</span>
        <span className="cart-link">Cart </span>
      </nav>
    </div>
  );
}
