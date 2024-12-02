import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { apiData } from '../ContextApi';
import { IoIosCheckmark } from "react-icons/io";

const Shopcart = () => {
    let cartApiData = useContext(apiData);
    let cartFilter = cartApiData.filter((item) => item.id >= 172 && item.id <= 176);

    return (
        <>
            <div className="container mx-auto py-10 flex justify-between ">
                <div className="w-[60%] ">
                    <div className="flex font-bold text-xl font-josefin ">
                        <h3>Product</h3>
                        <h3 className='ml-[41%] '>Price</h3>
                        <h3 className='ml-[8%] '>Quantity</h3>
                        <h3 className='ml-[10%] '>Total</h3>
                    </div>

                    {cartFilter.map((item) => (


                        <div className="flex items-center mb-5 justify-between mt-5">
                            <div className="flex items-center gap-5 text-[14px]  w-[45%] ">
                                <img className='w-[100px] border bg-[#f5f5f9] ' src={item.thumbnail} alt="" />
                                <div className="">
                                    <h3 className='font-bold'>{item.title} </h3>
                                    <p>color:Brown</p>
                                    <p>Size:XL</p>
                                </div>
                            </div>

                            <p className=' w-[28%] text-center'>{item.price} </p>

                            <div className="flex items-center gap-2 border bg-[#f5f5f8] ">
                                <p><FaMinus /></p>
                                <p>1</p>
                                <p><FaPlus /></p>
                            </div>

                            <p className=' w-[20%] text-end '>$219.00</p>

                        </div>

                    ))}
                    <div className="flex justify-between">
                    <button className='py-2 px-3 text-white font-josefin rounded-sm bg-biguni'>Update Curt</button>
                    <button className='py-2 px-3 text-white font-josefin rounded-sm bg-biguni'>Cleat Curt</button>
                    </div>
                </div>

                <div className=" w-[35%] ">
                    <h2 className='text-center font-bold text-xl font-josefin'>Cart Totals</h2>
                    <div className="mt-8 border py-8 px-5 bg-[#F6F5FF] rounded-sm ">
                        <div className="flex justify-between items-center font-bold border-b-2 pb-2 ">
                            <p>Subtotals:</p>
                            <p>$219.00</p>
                        </div>
                        <div className="flex justify-between items-center font-bold border-b-2 pb-2 mt-5">
                            <p>Totals:</p>
                            <p>$325.00</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <p className='border bg-green-500 text-white rounded-full'><IoIosCheckmark /></p>
                            <p> Shipping & taxes calculated at checkout</p>                            
                        </div>
                        <button className='bg-green-600 text-white py-2 w-full text-center rounded-md mt-8'>Proceed To Checkout</button>
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
