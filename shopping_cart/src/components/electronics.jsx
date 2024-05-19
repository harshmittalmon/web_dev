import React, { useState, useEffect } from "react";
import Card from "./card";

export default function Electronics() {
  const [electronicsList, setElectronicsList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((res) => {
        setElectronicsList(res);
      });
  }, []);
  return <div className="electronics">
    <h1>Shop Electronics</h1>
    <div className="electronics-container">
    {
      electronicsList.map(
        (element) => {
          return (
            <Card 
            image_src={element.image}
            heading = {element.heading}
            rating = {element.rating}
            description={element.description}
            price= {element.price}
            id = {element.id}
            category={element.category}
            />
          )
        }
      )
    }
    </div>

  </div>;
}
