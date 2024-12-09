import React from 'react'
import ShopGrid from '../Components/ShopGrid'
import Details from '../Components/shopPages/Details'
import Description from '../Components/shopPages/Description'
import Related from '../Components/shopPages/Related'
import Social from '../Components/Social'


const Detailspage = () => {
  return (
    <>
      <ShopGrid pageName='Product Details' taitle='Shop Grid Default' />
      <Details/>
      <Description />
      <Related />
      <Social />
    </>
  )
}

export default Detailspage
