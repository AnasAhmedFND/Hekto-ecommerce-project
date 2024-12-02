import React from 'react'
import { Link } from 'react-router-dom'

const ShopGrid = (props) => {
  return (
    <>
    <div className="bg-[#F6F5FF]">

      <div className="container mx-auto py-24 ">
       <h2 className=' text-2xl font-bold font-josefin'>Shop Grid Default</h2>
       <p className='font-bold '>Home.Page. <span className='text-red-500 font-bold'>{props.pageName}</span></p>
      <button className='py-2 px-3 bg-green-500 mt-2 rounded-lg text-white'><Link to='/shoplist' >Next page</Link> </button>
      </div>
    </div>
    </>
  )
}

export default ShopGrid
