import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../home/home'
import ProductPage from '../datacards'
import DetailPage from '../detail/detail'
 import About from '../../../../src/routes/about'
import ContactUs from '../../../../src/routes/contactus'
import ProductsInBasget from '../basget'
const RouteComm = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/datacards" element={<ProductPage />} />
  <Route path="/detaill/:id" element={<DetailPage />} />
  <Route path="/about" element={<About/> }/>

  <Route path="/contact" element={<ContactUs />} />
  <Route path="/productsinbasget" element={<ProductsInBasget/>}/>
  
</Routes>
    </div>
  )
}

export default RouteComm