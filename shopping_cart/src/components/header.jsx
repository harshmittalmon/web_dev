import React, { useEffect, useState } from "react";
import basket from "../assets/basket.svg";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import downarrow from "../assets/down-arrow.svg";
import cart from "../assets/cart.svg";
import { func } from "prop-types";
export default function Header() {
  const [categoryState, setCategoryState] = useState(false);
  const [cartState, setCartState] = useState(false);
  

  useEffect(
    () => {
      if(categoryState){
        window.addEventListener('click',setCategoryState(false));
        toggleCategoryState();
      }
    },[]
  )
  function toggleCategoryState() {
    setCategoryState((categoryState) => !categoryState);
  }


  function openCart() {
    setCartState(true);
  }

  function closeCart() {
    setCartState(false);
  }

  function openCart() {
    cart.classList.add("activate-cart");
    // const cart = document.querySelector(".cart");
    
    // const card = document.querySelector(".card");
    // card.style.width = "400px";
  }
  function closeShopping() {
    const cart = document.querySelector(".cart");
    cart.classList.remove("activate-cart");
  }

  return (
    <>
      <div class="header flex space-between align-center">
        <div className={`main-logo flex align-center  `}>
          <span>
            {" "}
            <div>Your's</div>
            <div>Basket</div>
          </span>
          <img src={basket} alt="" />
        </div>

        <nav className="header-nav flex justify-right align-center">
          <span className="home-link">
            <Link to="/home">Home</Link>
          </span>
          <span className="category-link" onClick={toggleCategoryState}>
            <a>Shop</a>
            <img
              src={downarrow}
              className={categoryState == false ? "" : "reverse-character"}
            />
          </span>
          <span className="cart-link">
            <Link>
              <img src={cart} alt="" onClick={openCart} />
            </Link>
            <div className="cart-count">0</div>
          </span>
          <div
            className={`sub-menu-wrap ${
              categoryState == false ? "not-show" : "show"
            }`}
          >
            <div className="sub-menu">
              <div className="sub-menu-list flex">
                <div className="sub-menu-list-link">
                  {" "}
                  <Link onClick={toggleCategoryState} to="/shop/allproducts">
                    {" "}
                    All Products{" "}
                  </Link>{" "}
                </div>
                <div className="sub-menu-list-link">
                  <Link onClick={toggleCategoryState} to="/shop/electronics">
                    Electronics
                  </Link>
                </div>
                <div className="sub-menu-list-link">
                  <Link onClick={toggleCategoryState} to="/shop/jewellery">
                    Jewellery
                  </Link>
                </div>
                <div className="sub-menu-list-link">
                  <Link onClick={toggleCategoryState} to="/shop/mensclothing">
                    Men's Clothing
                  </Link>
                </div>
                <div className="sub-menu-list-link">
                  <Link onClick={toggleCategoryState} to="/shop/womensclothing">
                    Women's Clothing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="cart">
        <h2> Cart Items</h2>
        <ul className="listCard"></ul>

        <div className="checkOut">
          <div className="total">0</div>
          <div className="close-shopping" onClick={closeShopping}>
            Close
          </div>
        </div>
      </div>
      <Outlet />
      <div className="super-overlay">
        
      </div>
    </>
  );
}
