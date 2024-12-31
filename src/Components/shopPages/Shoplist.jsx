import React, { useContext } from 'react'
import { MdOutlineStar } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";
import { GiCrossedSabres } from "react-icons/gi";

import { useDispatch, useSelector } from 'react-redux';
import { clearWishAll, deleteWishItem } from '../slice/wishSlice';
import { Link } from 'react-router-dom';
import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../slice/cartSlice';


const Shoplist = () => {
  // wish item add .......................
  let wishData = useSelector((state) => state.wishItemSlice.wishItem)

  // wish item delete.....................
  const dispatch = useDispatch()
  let hendleWishItem = (index) => {
    dispatch(deleteWishItem(index))
  }

  // wish all itme clear.................
  let hendleClearWish = () => {
    dispatch(clearWishAll())
  }

  // wish item cart added................
  let hendelAddToCart = (product) => {
   dispatch(addToCart({...product, qty: 1}))
   toast.success('Added to cart')
  } 

  return (
    <>
      <div className="container mx-auto pt-10 pb-20">


        {wishData.length > 0 ?
        
        wishData.map((item, index) => (

          <div key={index} className=" md:flex  gap-10 items-center mb-5  shadow-lg p-2 relative">
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
                <p><IoMdHeartEmpty /></p>
                <p><FaSearchPlus /></p>
                <p onClick={() => hendelAddToCart(item)} className='cursor-pointer'><LuShoppingCart /></p>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"                    
                     />
              </div>
              <p onClick={() => hendleWishItem(index)} className='absolute top-5 right-5 w-10 h-10 font-bold bg-[#f5f5f9] text-2xl flex justify-center p-2 rounded-full hover:bg-biguni hover:text-white duration-500 '><GiCrossedSabres /></p>
            </div>
          </div>
        ))
        :
        <button className='bg-biguni py-2 px-3 text-white rounded-sm relative  top-[60px] md:w-[20%] ml-[40%] '><Link to='/shop' > Go to shop</Link></button>

      }

        <div className="flex justify-center  pb-5">

          {wishData.length > 0 &&
          
          <button onClick={hendleClearWish} className=' bg-biguni py-2 px-3 text-white rounded-sm relative  top-[60px] md:w-[20%] '>Clear All Item</button>
          }

         
        </div>

      </div>
    </>
  )
}

export default Shoplist
