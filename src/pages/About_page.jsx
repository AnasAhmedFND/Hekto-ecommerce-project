import React from 'react'
import Shopex from '../Components/Shopex'
import About_us from '../Components/About/About_us'
import ShopGrid from '../Components/ShopGrid'
import About_client from '../Components/About/About_client'

const About_page = () => {
  return (
    <div>
      <ShopGrid pageName= "About Us" taitle=" About Us" />
      <About_us/>
      <Shopex />
      <About_client />
    </div>
  )
}

export default About_page
