import React from 'react'
import Login from '../Components/Others_page/Login'
import ShopGrid from '../Components/ShopGrid'
import Social from '../Components/Social'


const Logings = () => {
  return (
    <>
      <ShopGrid  pageName='My Account' taitle='My Account' />
      <Login />
      <Social />

    </>
  )
}

export default Logings
