import { useState } from 'react'

import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Rooted from './Components/Rooted'

import Blog from './Components/Blog'
import TwoTrending from './Components/TwoTrending'
import Shop from './pages/Shop'
import Social from './Components/Social'
import Listpage from './pages/Listpage'
import Cart from './pages/Cart'
import Detailspage from './pages/Detailspage'
import Logings from './pages/Logings'
import Contact_page from './pages/Contact_page'




function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route element={<Rooted/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/product' element={<TwoTrending/>} />      
      <Route path='/contact' element={<Contact_page/>} />
      <Route path='/shoplist' element={<Listpage/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/shop/:id' element={<Detailspage />} />
      <Route path='/login' element={<Logings/>} />

    </Route>

  ))
 

  return (
    <>
   
    <RouterProvider router={myRoute}/>
    
    </>
  )
}

export default App
