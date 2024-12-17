import React from 'react'
import Found_404 from '../Components/Others_page/Found_404'
import ShopGrid from '../Components/ShopGrid'
import Social from '../Components/Social'

const Found_page = () => {
  return (
    <div>


    <ShopGrid pageName='404 Not Found' taitle='404 Not Found' />

    <Found_404/>
    <Social/>
      
    </div>
  )
}

export default Found_page
