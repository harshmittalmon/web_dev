import React, { useEffect, useState } from "react";

export default function Home() {
  const [imageArray, setImageArray] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setImageArray(data));
  }, []);

  return (
    <div className="home">
      <h2 className="welcome-heading"> Welcome to Market Basket!</h2>
      <p>
        Checkout some of the <span>BEST SELLERS !</span>{" "}
      </p>
      <div className="home-image-slider flex">
        {imageArray.map((image) => {
          return (
            <div className="slide flex justify-center align-center">
              <img src={image.image} alt="" srcset="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
