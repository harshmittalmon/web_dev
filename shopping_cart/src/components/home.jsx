import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../App";
export default function Home() {
  const [imageArray, setImageArray] = useState([]);
  useEffect(() => {
    let isMounted = true;
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {  // Check if the component is still mounted
          setImageArray(data);
          // if (!cartItems.includes("shaitan")) {

          //   addToCart("shaitan");
          // }
        }
      });

      return () => {
        isMounted = false;
      };
  }, []);

  const { cartItems , addToCart} = useContext(ShopContext);
  
  // console.log(cartItems);
  return (
    <div className="home card">
      <h1 className="welcome-heading"> Welcome to Market Basket!</h1>
      <p>
        Checkout some of the <span>BEST SELLERS !</span>{" "}
      </p>
      <div className="home-image-slider"> 

        {imageArray.map((image, index) => {
          return (
            <div className={`slide slide${index + 1}`} key={index} style={{ animationDelay: `calc(20s / 5  * (20 - ${index}) * -1)` }}>
              <img src={image.image} alt={`Image ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
