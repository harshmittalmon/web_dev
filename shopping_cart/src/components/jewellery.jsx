import React, { useState,useEffect } from 'react'

export default function Jewellery() {
  const [jeweleryList, setJewelleryList] = useState([]);
  useEffect(
    () => {
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(res=>res.json())
        .then()
    },[]
  ) 
  return (
    <div>
        Welcome to Jewellery 
      
    </div>
  )
}
