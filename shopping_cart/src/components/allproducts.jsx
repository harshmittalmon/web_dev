import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Card from './card';
import { v4 as uuidv4 } from "uuid";
import { ShopContext } from '../App';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function AllProducts() {
  const {cartItems, products, addToCart} = useContext(ShopContext);
  const [loading, setLoading] = useState(true);

  useEffect(
    ()=>{
      setTimeout( () => {
        setLoading(false);
      }, 2000)
    },[]
  ) 
  console.log(cartItems);
  return (

    <div className='all-products'>
      {loading ? <Skeleton/> : <h1> Shop anything you like </h1>}
      <div className="grid">   
        {
          
          products.map(
            (element) => 
              loading? <Skeleton/> :
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
