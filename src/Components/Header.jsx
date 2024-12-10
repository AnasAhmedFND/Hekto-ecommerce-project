import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  
 let cartItemsNumber = useSelector((state) => state.cartItmeSlice.cartItems)

 
 

  return (
    <>
      <div className=" md:flex-row flex  flex-col md:justify-between border items-center md:px-20 px-2 py-4 bg-[#7E33E0] text-white  ">       
            <div className="flex  gap-10 items-center">                      
            <p className='flex items-center gap-2  '><MdMailOutline /> mhhasanul@gmail.com</p>                         
            <p  className='flex items-center gap-2  '><MdAddCall /> (12345)67890</p>            
            </div>        

         <div className="flex md:gap-5 gap-4 items-center ">
            <select className='bg-[#7E33E0] border-none outline-none ' name="langu" id="eng">
              <option value="Enaglish">English</option>
              <option value="Enaglish">বাংলা</option>

              </select>           
            <select className='bg-[#7E33E0] border-none outline-none ' name="#" id="usd">
              <option value="#">USD</option>
              <option value="#">BDT</option>
            </select>
            <p className='flex items-center'><Link to='/login' className='flex items-center' >  Login <RxPerson /> </Link></p>
            <p className='flex items-center'><Link to='/shoplist' className='flex items-center'> Wishlist  <FaRegHeart className=' pt-1 pl-1 ' /> </Link> </p>
            <div className="relative ">
            <p><Link to='/cart' >  <FiShoppingCart className='w-[20px]  ' /> </Link> </p>
            <h6 className='absolute -top-2 -right-2 bg-biguni rounded-full h-4 w-4 flex justify-center text-[12px] items-center '>{cartItemsNumber.length} </h6>
            </div>
         </div>
       </div>
    </>
  )
}

export default Header
