import React, { useContext, useState } from 'react'
import { MdOutlineStar } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";
import { apiData } from '../ContextApi';

const Shoplist = () => {
 
    let shopListApi = useContext(apiData);

   let ListPageFilter = shopListApi.filter((item) => item.id >= 9 && item.id <= 15)

  return (
    <>
    <div className="container mx-auto pt-10 pb-20">

    {ListPageFilter.map((item) => (

      <div className=" md:flex  gap-10 items-center mb-5  shadow-lg p-2">
        <img className=' ' src={item.thumbnail} alt="" />
        <div className="">
            <h3 className='font-bold text-xl font-josefin'>{item.title} <span className='text-6xl font-bold text-[#e12ec6] '>.</span> <span className='text-6xl font-bold text-red-800'>.</span> <span className='text-6xl font-bold text-[#2b2bf7] '>.</span> </h3>
            <div className="flex gap-5 items-center">
                <p className='font-bold'>${item.price} </p>
                <p className='text-red-500 font-bold line-through'>${item.discountPercentage} </p>

                <div className="flex text-yellow-400 ">
                <p><MdOutlineStar /></p>
                <p><MdOutlineStar /></p>
                <p><MdOutlineStar /></p>
                <p><MdOutlineStar /></p>
                <p><MdOutlineStar /></p>
                </div>                
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est <br /> adipiscing in phasellus non in justo.</p>
            <div className="flex mt-4 gap-10">
                <p><LuShoppingCart /></p>
                <p><IoMdHeartEmpty /></p>
                <p><FaSearchPlus /></p>
            </div>
        </div>
      </div>
    )) }
    </div>
    </>
  )
}

export default Shoplist
