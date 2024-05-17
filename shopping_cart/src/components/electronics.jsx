import React, { useState, useEffect } from "react";

export default function Electronics() {
  const [electronicsList, setElectronicsList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((res) => {
        setElectronicsList(res);
      });
  }, []);
  return <div>
    {
      electronicsList.map(
        (element) => {
          return (
            <div> {element.title}</div>
          )
        }
      )
    }
  </div>;
}
