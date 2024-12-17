import React from 'react'
import Found from '../img/Group404.png'
import { Link } from 'react-router-dom'
const Found_404 = () => {
  return (
    <>
      <div className="container mx-auto pt-10 md:pb-20 pb-10 px-2 md:px-0">

        <img className='md:w-full  ' src={Found} alt="" />
        <button className='py-2 px-5 bg-biguni text-white rounded-sm md:ml-[43%] ml-[30%] md:mt-0 mt-5 '><Link to='/' > Back To Home</Link></button>
      
      </div>
    </>
  )
}

export default Found_404
