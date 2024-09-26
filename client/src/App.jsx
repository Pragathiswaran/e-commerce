import React, {useEffect, useState} from "react"
import Navbar from "./component/navbar/Navbar"
// import ProductCard from "./component/product/ProductCard"
import SingleProduct from "./component/product/SingleProduct"
import Home from "./pages/Home"
import Footer from "./component/footer/Footer"
import { Routes, Route } from "react-router-dom"

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<SingleProduct cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="/search" element={<Home />} />
        </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App
