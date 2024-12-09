import React from 'react'
import Shopcart from '../Components/shopPages/Shopcart'
import ShopGrid from '../Components/ShopGrid'


const Cart = () => {
 

  return (
    <div>
      <ShopGrid pageName='Shop Cart' taitle='Shop Grid Default' />
      <Shopcart/>
    </div>
  )
}

export default Cart
