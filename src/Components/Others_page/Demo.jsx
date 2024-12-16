import React, { useContext } from 'react'
import { IoIosCheckmark } from "react-icons/io";
import { apiData } from '../ContextApi';


const Demo = () => {
    const demoData = useContext(apiData);
    let demofilter = demoData.filter((item) => item.id >= 98 && item.id <= 101)
  return (
    <>
      <div className="container mx-auto py-20  flex justify-between">
        <div className="w-[60%] ">
            <h2 className='font-bold font-josefin text-2xl text-orgain'>Hekto Demo</h2>
            <p className='mt-2'>Cart/ Information/ Shipping/ Payment</p>
            <div className=" bg-[#F8F8FD] mt-5 py-14 px-4">

                <div className="flex justify-between mt-5 items-center">
                <h3 className='font-bold font-josefin'>Contact Information</h3>
                <p className='text-[12px] text-[#50505e] '>Already have an account? Log in</p>
                </div>
                <input className='mt-10 border-b-2 pb-2 w-full bg-[#F8F8FD] px-2' type="text" placeholder='Email or mobile phone number' />

                <p className='flex items-center mt-5 text-[14px] gap-3 '><IoIosCheckmark className='border text-[20px] rounded-sm bg-green-500 text-white  ' /> Keep me up to date on news and excluive offers</p>


                <h3 className='font-bold font-josefin mt-20'>Shipping address</h3>
                <div className=" flex justify-between mt-5">
                    <input className='w-[48%] border-b-2 pb-2 bg-[#F8F8FD] px-2 ' type="text" placeholder='First name (optional)' />
                    <input className='w-[48%] border-b-2 pb-2 bg-[#F8F8FD] px-2 ' type="text" placeholder='Last name' />
                </div>
                <input className='border-b-2 pb-2 mt-5 w-full bg-[#F8F8FD] px-2 ' type="text" placeholder='Address' />
                <input className='border-b-2 pb-2 mt-5 w-full bg-[#F8F8FD] px-2 ' type="text" placeholder='Appaetnentment,suit,e.t.c (optinal)'/>
                <input className='border-b-2 pb-2 mt-5 w-full bg-[#F8F8FD] px-2 ' type="text" placeholder='City' />
                <div className="flex justify-between mt-5">
                    <input className='w-[48%] border-b-2 pb-2 bg-[#F8F8FD] px-2 ' type="text" placeholder='Bangladesh (Cuntry)' />
                    <input className='w-[48%] border-b-2 pb-2 bg-[#F8F8FD] px-2 ' type="text" placeholder='postal Code' />
                </div>

                <button className='py-2 px-5 bg-biguni font-josefin text-white mt-16 rounded-sm'>Continue Shipping</button>
            </div>
        </div>


        <div className="w-[37%] ">
            <div className="px-2">

            {demofilter.map((item) => (
            <div className="flex justify-between border-b-2 pb-4 mb-4">

                <div className="flex   gap-4 w-[80%] ">
                <img className='w-[80px]  rounded-sm bg-[#f5f5f9]  ' src={item.thumbnail} alt="" />

                <div className="">
                    <h5>{item.title}.</h5>
                    <p>Color Brown</p>
                    <p>SizeXL</p>
                </div>
                </div>                   
                 <p>${item.price}</p>
                   
            </div>
            ))}
            </div>

            <div className=" mt-10 bg-[#F8F8FD] rounded-sm py-10 px-2">
                <div className="flex justify-between border-b-2 pb-2 font-bold ">
                    <h6>Subtotals:</h6>
                    <p>$219.00</p>
                </div>
                <div className="flex justify-between border-b-2 pb-2 mt-4 font-bold">
                    <h6>Totals:</h6>
                    <p>$325.00</p>
                </div>
                <p className='flex items-center gap-4 text-[14px] mt-5 '><IoIosCheckmark className='border bg-green-500 text-white rounded-sm text-[20px] ' /> Shipping & taxes calculated at checkout</p>
                <button className='border w-full rounded-sm bg-green-700 text-white text-center py-1 mt-5'>proceed To Checkout</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Demo
