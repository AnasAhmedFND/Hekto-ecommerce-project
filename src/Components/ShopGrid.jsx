import React from 'react'


const ShopGrid = (props) => {
  return (
    <>
    <div className="bg-[#F6F5FF]">
      <div className="container mx-auto px-2 md:px-0">

      <div className="container mx-auto py-24 ">
       <h2 className=' text-2xl font-bold font-josefin'>{props.taitle} </h2>
       <p className='font-bold '>Home.Page. <span className='text-red-500 font-bold'>{props.pageName}</span></p>
      
      </div>
      </div>
    </div>
    </>
  )
}

export default ShopGrid
