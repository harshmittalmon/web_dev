import { useState,createContext } from 'react'
import './App.css'
import Header from './components/header'
import Home from './components/home'

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});



export default function App() {
  const [cartItems, setCartItems] = useState(["harsh", "aditi"]);
  const products =["harsh", "Angel"];

  const addToCart = (name) => {
    setCartItems((cartItems) => [...cartItems, name]);
  };

  return (
    <ShopContext.Provider value={{cartItems,products,addToCart}}>
      <Header />
    </ShopContext.Provider>
  )
}

