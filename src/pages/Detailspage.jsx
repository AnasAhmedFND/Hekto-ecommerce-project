import React from 'react'
import ShopGrid from '../Components/ShopGrid'
import Details from '../Components/shopPages/Details'
import Description from '../Components/shopPages/Description'

const Detailspage = () => {
  return (
    <>
      <ShopGrid pageName='Product Details' />
      <Details/>
      <Description />
    </>
  )
}

export default Detailspage
