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




function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route element={<Rooted/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/product' element={<TwoTrending/>} />      
      <Route path='/social' element={<Social/>} />
      <Route path='/shoplist' element={<Listpage/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/details' element={<Detailspage/>} />
    </Route>

  ))
 

  return (
    <>
   
    <RouterProvider router={myRoute}/>
    
    </>
  )
}

export default App
