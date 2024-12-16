import React from 'react'
import Completed from '../Components/Others_page/Completed'
import ShopGrid from '../Components/ShopGrid'
import Social from '../Components/Social'

const Complet_page = () => {
  return (
    <>
      <div className="">


        <ShopGrid  pageName='Order Completed' taitle='Order Completed' />
        <Completed/>
        <Social/>
      </div>
    </>
  )
}

export default Complet_page
