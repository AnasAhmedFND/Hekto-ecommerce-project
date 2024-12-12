import React, { useContext } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import Shopa from '../assets/charcal.png'
import { apiData } from './ContextApi';
import { Link } from 'react-router-dom';

const Discount = () => {

 const discountDataApi = useContext(apiData)

 let filterDiscountItem = discountDataApi.filter((item) => item.id >= 14 && item.id <= 14)

  return (
    <>
      <div className="container mx-auto md:py-10">
        <h2 className='text-2xl font-bold text-center font-josefin mt-10 text-[#151875] '>Discount Item</h2>
        <ul className='flex justify-center gap-5 mt-2  '>
            <li className=' hover:text-primary hover:underline '>Wood Chair</li>
            <li className=' hover:text-primary hover:underline  '>Plastic Chair</li>
            <li className=' hover:text-primary hover:underline  '>Sofa Colletion</li>
        </ul>
        <div className=" md:flex md:flex-row items-center flex flex-col-reverse">
            <div className="mt-5 md:mt-0 px-2 md:px-0">
                <h2 className='text-xl font-bold font-josefin text-[#151875] '>20% Discount Of All Products</h2>
               <h4 className='text-primary text-lg'>Eams Sofa Compact</h4>
               <p className='mt-2 md:text-[15px] text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br /> feugiat habitasse nec, bibendum condimentum.</p>            

              <div className="mt-5 flex">
                 <div className=" items-center">
                    <div className="flex items-center gap-2">
                        <p><IoMdCheckmark /></p>
                        <p className='md:text-[15px] text-[12px]'>Material expose like metals</p>
                    </div>

                    <div className="flex items-center gap-2">
                    <p><IoMdCheckmark /></p>
                    <p className='md:text-[15px] text-[12px]'>Simple neutral colours.</p>
                    </div>
                    </div>
                   
                 <div className=" items-center ml-4">
                    <div className="flex items-center gap-2">
                    <p><IoMdCheckmark /></p>
                    <p className='md:text-[15px] text-[12px]'>Clear lines and geomatric figures</p>
                    </div>

                    <div className="flex items-center gap-2">
                    <p><IoMdCheckmark /></p>
                    <p className='md:text-[15px] text-[12px]'>Material expose like metals</p>
                    </div>
                 </div>               
               
                </div>
                <button className='mt-4 py-2 px-10 md:ml-0 ml-20 bg-[#f0237c] text-white rounded-lg '><Link to='/shop' > Shop Now</Link></button>


            </div>
            <div className="md:ml-5">

            {filterDiscountItem.map((item) => (

                <div className="relative">
                    <img className='w-[500px] ' src={item.thumbnail} alt="" />

                    <img className='absolute top-12 left-6 -z-10 w-[90%] ' src={Shopa} alt="" />
                </div>           
            ))}
            </div>

        </div>
      </div>
    </>
  )
}

export default Discount
