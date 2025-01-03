import React, { useContext } from 'react'
import { apiData } from '../ContextApi'
import { FaPenNib } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeartPulse } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToWish } from '../slice/wishSlice';

const Blog_right = () => {
  const blogData = useContext(apiData)

  let filter = blogData.filter((item) => item.id >= 11 && item.id <= 13);
  let recent = blogData.filter((item) => item.id >= 79 && item.id <= 82);
  let sale = blogData.filter((item) => item.id >= 146 && item.id <= 148);
  let offer_product = blogData.filter((item) => item.id >= 89 && item.id <= 92);

  //  add to cart item...................................................................
  const dispatch = useDispatch()
  let hendelAddToCart = (product) => {
    dispatch(addToCart({ ...product, qty: 1 }))
    toast.success('Added to cart')
  }
  // add to wish itme....................................................................
  let hendelAddToWish =(item) => {
    dispatch(addToWish({...item, qty: 1}))
    toast.success('Added to wish')
  }
  return (
    <>
      <section className="container mx-auto md:py-20 py-10  md:flex md:justify-between">
        <div className=" md:w-[65%] px-2">

          {filter.map((item) => (
            <div className=" mb-10 ">
              <img className='border w-full h-[380px] bg-[#edf4f4] rounded-lg ' src={item.thumbnail} alt="" />
              <div className="flex mt-4 items-center" >
                <p className='text-red-500'><FaPenNib /></p>
                <p className='ml-4 border px-5 bg-[#FFE7F9] font-josefin text-orgain rounded-sm md:text-[16px] text-[14px]'>Surf Auxion</p>
                <p className='ml-8 text-[#dd5c6f] '> <MdOutlineDateRange /></p>
                <p className='ml-4 bg-[#FFECE2] px-5 font-josefin text-orgain rounded-sm md:text-[16px] text-[14px]'>Dec 15 2025</p>

              </div>
              <h2 className=' font-bold text-2xl text-orgain font-josefin mt-6'>Mauris at orci non vulputate diam tincidunt nec.</h2>
              <p className='mt-6 text-[13px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum  eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>

              <button className='mt-5 font-bold '>Read More <span className='text-red-500'>*</span></button>
            </div>

          ))}
        </div>


        <div className=" md:w-[30%] px-2 ">
          <h2 className='font-bold text-2xl font-josefin text-orgain'>Search</h2>
          <div className="flex border-2 items-center rounded-md justify-between px-2 py-2 mt-5 ">
            <input className='  outline-none  w-[90%] ' type="Search" placeholder='Search For Posts' />
            <p className='relative right-2'><FaSearch /></p>
          </div>
          <h2 className='font-bold font-josefin text-2xl text-orgain mt-10 '>Categories</h2>
          <div className="flex mt-4 justify-between  w-[90%] ">
            <div className="flex flex-col gap-3  w-1/2  ">
              <p className=' py-1 pl-1 hover:bg-biguni hover:text-white rounded-sm duration-500'>Hobbies (14) </p>
              <p className=' py-1 pl-1 hover:bg-biguni hover:text-white rounded-sm duration-500'>Women (21)</p>
              <p className=' py-1 pl-1 hover:bg-biguni hover:text-white rounded-sm duration-500'>Women (21) </p>
            </div>

            <div className="flex flex-col gap-3  w-1/2 px-2">
              <p className=' py-1 pl-1 hover:bg-biguni hover:text-white rounded-sm duration-500'>Women (21) </p>
              <p className=' py-1 pl-1 hover:bg-biguni hover:text-white rounded-sm duration-500'>Women (21) </p>
              <p className=' py-1 pl-1 hover:bg-biguni hover:text-white rounded-sm duration-500'>Women (21) </p>
            </div>
          </div>
          <h2 className='font-bold font-josefin text-2xl text-orgain mt-5'>Recent Post</h2>
          {recent.map((item) => (
            <div className="flex items-center gap-2 mb-5 mt-5">
              <img className='w-[80px] border bg-[#FFE7F9]  rounded-sm' src={item.thumbnail} alt="" />
              <div className="">
                <h5>It is a long established fact</h5>
                <p>Dec 15 2024</p>
                <div className="flex gap-5 pt-2 ">
                  <p onClick={() => hendelAddToWish(item)} className='text-[#35c0ea] '><FaHeartPulse className='cursor-pointer' /></p>
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
                  <p><FaSearchPlus /></p>
                  <p onClick={() => hendelAddToCart(item)} className='text-primary cursor-pointer'><TiShoppingCart /></p>
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
              </div>
            </div>

          ))}

          <h2 className='font-bold font-josefin text-2xl text-orgain mt-6'>Sale Product</h2>
          <div className="mt-5">

          {sale.map((item) => (
            <div className="flex gap-2 mb-2 ">
              <img className='w-[80px] border bg-[#bde3e3] mb-2 rounded-sm ' src={item.thumbnail} alt="" />
              <div className="">
                <h5>Elit ornare in enim mauris.</h5>
                <p>Dec 15 2024</p>
                <div className="flex gap-5 pt-2 ">
                  <p className='text-[#35c0ea] '><FaHeartPulse /></p>
                  <p><FaSearchPlus /></p>
                  <p onClick={() => hendelAddToCart(item)} className='text-primary cursor-pointer'><TiShoppingCart /></p>
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
              </div>
            </div>

          ))}
          </div>

          <h2 className='font-bold font-josefin text-2xl text-orgain mt-5 '>offer Product</h2>
          <div className="flex flex-wrap justify-between mt-2">

            {offer_product.map((item) => (
              <div className="  w-[48%] text-center mb-2 relative bg-white group">
                <img className='  w-full bg-[#f5f5f8] rounded-sm  ' src={item.thumbnail} alt="" />
                <h5>{item.title}</h5>
                <p>${item.price} - ${item.discountPercentage} </p>
                <div className="absolute top-2  -left-22  duration-1000 ease-out group-hover:left-2 -z-20 group-hover:z-10  flex flex-col gap-3 pt-2 ">
                  <p className='text-[#35c0ea] '><FaHeartPulse /></p>
                  <p><FaSearchPlus /></p>
                  <p onClick={()=> hendelAddToCart(item)} className=' text-primary cursor-pointer'><TiShoppingCart /></p>
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
              </div>

            ))}
          </div>

          <h4 className='font-bold font-josefin text-2xl text-orgain mt-5'>Follow</h4>
          <div className="flex gap-5 mt-2">
            <p className=''><FaFacebook className=' w-[30px] h-[30px]  ' /></p>
            <p className=''><FaInstagram className=' w-[30px] h-[30px] text-primary   ' /></p>
            <p className=''><TiSocialTwitter className=' w-[30px] h-[30px] bg-[#2dccde]  text-white rounded-full' /></p>

          </div>

          <h4 className='mt-5 font-bold font-josefin text-2xl text-orgain'>Tags</h4>
          <div className="flex gap-5">
            <p className='hover:text-red-600 underline'>General</p>
            <p className='hover:text-red-600 underline'>Atsanil</p>
            <p className='hover:text-red-600 underline'>Insas</p>
          </div>

          <div className="flex gap-5 ">
            <p className='hover:text-red-600 underline'>Bibsaas</p>
            <p className='hover:text-red-600 underline'>Nulla</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Blog_right
