import { useState, createContext } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import { v4 as uuidv4 } from "uuid";

export const ShopContext = createContext({
  cartItems: [],
  products: [],
  removeFromCart: (id) => {},
  addToCart: (id) => {}
  
});

export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addToCart = (id) => {
    setCartItems((cartItems) => [...cartItems, id]);
  };

  const removeFromCart = (id) => {
    setCartItems((cartItems) =>
      cartItems.filter((element) => element !== id)
    );
  };
  
  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart, removeFromCart }}>
      <Header />
    </ShopContext.Provider>
  );
}
