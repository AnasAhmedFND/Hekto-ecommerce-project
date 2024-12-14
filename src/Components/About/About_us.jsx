import React from 'react'
import About from '../img/about.png'
const About_us = () => {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="flex gap-4">
        <div className="w-1/2  ">
            <img src={About} alt="" />
        </div>
        <div className=" w-1/2 pt-10 pl-2">
            <h2 className='font-bold text-2xl text-orgain font-josefin '>Know About Our Ecomerce <br /> Business, History</h2>
            <p className='text-[12px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <button className='mt-10 py-2 px-5 bg-biguni text-white rounded-md'>Contact Us</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About_us

