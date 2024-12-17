import React from 'react'
import Faq from '../Components/Others_page/Faq'
import ShopGrid from '../Components/ShopGrid'
import Social from '../Components/Social'

const Faq_page = () => {
  return (
    <div>
      
      <ShopGrid pageName='FAQ' taitle='FAQ' />
      <Faq/>
      <Social/>
    </div>
  )
}

export default Faq_page
