import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Cart from './components/cart.jsx';
import Electronics from './components/electronics.jsx';
import Home from './components/home.jsx';
import Jewellery from './components/jewellery.jsx';
import Mensclothing from './components/mensclothing.jsx';
import Womensclothing from './components/womensclothing.jsx';
import AllProducts from './components/allproducts.jsx';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        {path:"/home",element: <Home />},
        {path:"/electronics",element: <Electronics />},
        {path:"/jewellery",element: <Jewellery />},
        {path:"/mensclothing",element: <Mensclothing />},
        {path:"/womensclothing",element: <Womensclothing />},
        {path:"/electronics",element: <Electronics />},
        {path:"/allproducts",element:<AllProducts />},
      ]
    },
    {
      path:"cart",
      element:<Cart />,
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
