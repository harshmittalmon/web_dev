import React from "react";
import star from "../assets/star.svg"
export default function Card({
  image_src,
  heading,
  rating,
  description,
  price,
  id,
  category,
}) {

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
  const overlay = document.querySelector(".overlay");
  // overlay.addEventListener
  return (
    <div className="card">
      <div className="img-container flex justify-center align-center">
        <img src={image_src} alt="" />
      </div>
      <p>{heading}</p>
      <div className="price">
        ${price}
      </div>
      {/* <button>
        Add
      </button> */}
      <div className="add-remove flex space-between">
        <button>-</button><button>+</button>
      </div>
    </div>
  );
}
