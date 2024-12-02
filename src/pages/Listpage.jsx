import React from 'react'
import Shoplist from '../Components/shopPages/Shoplist'
import ShopGrid from '../Components/ShopGrid'
import Social from '../Components/Social'

const Listpage = () => {
  return (
    <div>
      <ShopGrid pageName='Shop List' />
      <Shoplist/>
      <Social/>
    </div>
  )
}

export default Listpage

