import React, { useContext } from "react";
import star from "../assets/star.svg"
import { ShopContext } from "../App";
export default function Card({
  image_src,
  heading,
  rating,
  description,
  price,
  id,
  category,
}) {

  const {cartItems,addToCart,removeFromCart} = useContext(ShopContext);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating.rate);
    const emptyStars = totalStars - filledStars;
    
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<img key={`filled-${i}`} src={star} alt="Filled Star" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={`empty-${i}`} src={star} alt="Empty Star" />);
    }

    return stars;
  };

  return (
    <div className="card">
      <div className="img-container flex justify-center align-center">
        <img src={image_src} alt="" />
      </div>
      <p>{heading}</p>
      <div className="price">
        ${price}
      </div>
      <div>
        {()=> {
          renderStars(2)
        }}
      </div>
      {
        cartItems.includes(id) ? 
        <button onClick={() => removeFromCart(id)}>Remove</button>
       : <button onClick={() => addToCart(id)}>
        Add
      </button>
      }
    </div>
  );
}
