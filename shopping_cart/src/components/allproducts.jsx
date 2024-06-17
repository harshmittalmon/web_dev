import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './card';
import { v4 as uuidv4 } from "uuid";

export default function AllProducts() {
  const [productArray,setProductArray] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const productsWithIds = data.map(product => ({
          ...product,
          id: product.id || uuidv4() // Ensure each product has a unique ID
        }));
        setProductArray(productsWithIds);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  // useEffect(() => {
  //   productArray.map((element) => {
  //     if (element.category === "men's clothing") {
  //       console.log(element);
  //     }
  //   });
  // }, [productArray]);

  return (
    <div className='all-products card'>
      <h1> Shop anything you like </h1>
      <div className="grid">   
        {
          productArray.map(
            (element) => 
              <Card 
              image_src = {element.image}
              heading = {element.title}
              rating = {element.rating}
              description = {element.description}
              price = {element.price}
              id = {element.id}
              category = {element.category}
              key = {element.id}
              />
            
          )
        }

      </div>
    </div>
  )
}
