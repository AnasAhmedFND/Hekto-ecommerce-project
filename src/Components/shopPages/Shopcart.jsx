import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { IoIosCheckmark } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { increment, dicrement, deleteProduct, clearCart } from '../slice/cartSlice';
import { GiCrossedSabres } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Shopcart = () => {

    let cartData = useSelector((state) => state.cartItmeSlice.cartItems)
   
   
    // increment plus..................................
    let dispatch = useDispatch()

    let hendleIncriment = (item) => {
        dispatch(increment(item))
    }
    // Dicriment minus...................
    let dispatch2 = useDispatch()
    let hendleDecriment = (item) => {
        dispatch2(dicrement(item))
        
    }
    // delete cart item..............................
    const dispatch3 = useDispatch()
    let hendleFromProduct = (index) => {
        dispatch3(deleteProduct(index))
        
    }
     
    // clear all item cartpage................................
    const hendleClearCart = () => {
        dispatch(clearCart())
    }

    
    // total price...............................
    
    let {totalPrice, totalQuantity} = cartData.reduce((acc, current) => {
        acc.totalPrice += (current.price * current.qty);
        acc.totalQuantity += current.qty;
        return acc
    }, {totalPrice: 0, totalQuantity: 0})
    


    return (
        <>
            <div className="container mx-auto md:py-20 py-10 md:px-0 px-2 md:flex md:justify-between ">

                <div className="md:w-[60%]  ">

                    <ul className="flex font-bold md:text-xl font-josefin ">
                        <li>Total</li>
                        <li className='md:ml-[45%] ml-[28%]'>Price</li>
                        <li className='md:ml-[8%] ml-10 '>Quantity</li>
                        <li className='md:ml-[10%] ml-10'>Total</li>

                    </ul>
                         
                    {cartData.length > 0 ?

                    cartData.map((item,index) => (

                        <div  className="flex md:items-center mb-5 justify-between md:mt-5 mt-10 py-5 relative">
                            <div className="md:flex items-center gap-5 text-[14px]  w-[45%] relative ">
                                <img className='w-[100px] border bg-[#f5f5f9] ' src={item.thumbnail} alt="" />
                                <p onClick={() => hendleFromProduct(index) } className='absolute -top-2 left-20 border h-8 w-8 rounded-full flex justify-center items-center bg-[#e3e3ea] hover:bg-biguni hover:text-white '><GiCrossedSabres /></p>
                                <div className="mt-2 md:mt-0">
                                    <h3 className='font-bold'>{item.title} </h3>
                                    <p>color:Brown</p>
                                    <p>Size:XL</p>
                                </div>
                            </div>

                            <p className=' w-[28%] md:text-center'>{item.price} </p>

                            <div className="flex md:items-center gap-2 border bg-[#f5f5f8] h-[20px] md:h-full relative right-5 md:right-0 ">
                                <p onClick={() => hendleDecriment(index)} className='cursor-pointer ' ><FaMinus /></p>
                               <p className='w-[20px] pl-1 bg-white flex justify-center items-center' >{item.qty} </p>
                                <p onClick={()=> hendleIncriment(index)} className='cursor-pointer ' ><FaPlus /></p>
                            </div>

                            <p className=' w-[20%] text-end '>{(item.qty * item.price).toFixed(2)} </p>
                            
                           
                        </div>
                    ))

                    :
                    <button className='bg-biguni py-2 px-3 text-white rounded-sm relative left-[70%] top-[60px] '><Link to='/shop' >Go To Shop</Link> </button>

                    }


                    <div className="flex justify-between pt-5 ">
                        <button className='py-2 px-3 text-white font-josefin rounded-sm bg-biguni'>Update Curt</button>

                        {cartData.length > 0 &&
                        <button onClick={hendleClearCart} className='py-2 px-3 text-white font-josefin rounded-sm bg-biguni'>Clear Curt</button>
                         }
                    </div>
                </div>

                <div className=" md:w-[35%] pb-10 md:mt-0 mt-10 ">
                    <h2 className='text-center font-bold text-xl font-josefin'>Cart Totals</h2>
                    <div className="mt-8 border py-8 px-5 bg-[#F6F5FF] rounded-sm ">
                        <div className="flex justify-between items-center font-bold border-b-2 pb-2 ">
                            <p>Subtotals:</p>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center font-bold border-b-2 pb-2 mt-5">
                            <p>Total Quantity :</p>
                            
                            <p className='cursor-pointer'>{totalQuantity} </p>
                        </div>
                        <div className="flex items-center mt-5">
                            <p className='border bg-green-500 text-white rounded-full'><IoIosCheckmark /></p>
                            <p> Shipping & taxes calculated at checkout</p>
                        </div>
                        <button className='bg-green-600 text-white py-2 w-full text-center rounded-md mt-8'><Link to='/complete' >Proceed To Checkout</Link> </button>
                    </div>
                    <h2 className='font-bold text-xl font-josefin mt-8 text-center'>Calculate Shopping</h2>
                    <div className="mt-5 border py-8 px-5 bg-[#F6F5FF] rounded-sm">
                        <p className='border-b-2 pb-2 '>Bangladesh</p>
                        <p className='border-b-2 pb-2 mt-4 '>Mirpur Dhaka - 1200</p>
                        <p className='border-b-2 pb-2 mt-4'>Postal Code</p>
                        <button className='py-2 px-5 bg-biguni font-josefin mt-8 text-white rounded-sm '>Calculate Shiping</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shopcart
