  import React, { useEffect, useState,useContext } from "react";
  import { cloneElement } from "react";
  import { ShopContext } from "../App";
  export default function Home() {
    const [imageArray, setImageArray] = useState([]);
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setImageArray(data));
        addToCart("Shaitan")
    }, []);

    const {products,addToCart,cartItems} = useContext(ShopContext);
    
    console.log(cartItems);
    return (
      <div className="home card">
        
        <h1 className="welcome-heading"> Welcome to Market Basket!</h1>
        {/* <button onClick={() => addToCart('heya')}>Add New Product</button> */}
        <p>
          Checkout some of the <span>BEST SELLERS !</span>{" "}
        </p>
        <div className="home-image-slider">
          <div className="home-image-slider-track">
            {imageArray.map((image) => {
              return (
                <div className="slide">
                  <img src={image.image} alt="" srcset="" />
                </div>
              );
            })}
          </div>
  
        </div>
      </div>
    );
  }
