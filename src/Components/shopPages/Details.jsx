import React, { useContext, useState } from 'react'

import { IoIosStar } from "react-icons/io";
import { apiData } from '../ContextApi';
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Details = () => {
    const DetailsApiData = useContext(apiData)
    let detailsFilter = DetailsApiData.filter((item) => item.id >= 13 && item.id <= 15);
    let detailsFilterMain = DetailsApiData.filter((item) => item.id >= 7 && item.id <= 7);



    return (
        <>
            <div className="container mx-auto py-20 ">
                
                <div className="flex border gap-10 p-2 shadow-md">

                <div className="  flex gap-4">
                    <div className=" rounded-sm  w-[100px] flex flex-col gap-2 ">
                        {detailsFilter.map((item) => (
                            <img className='  w-full  bg-[#ebebf0] ' src={item.thumbnail} alt="" />
                        ))}
                    </div>
                    <div className="w-[300px]  rounded-sm border-red-600">
                        {detailsFilterMain.map((item) => (
                            <img className='bg-[#ebebf0] h-full ' src={item.thumbnail} alt="" />
                        ))}
                    </div>
                </div>
                <div className="">
                    <h3 className='text-2xl font-bold font-josefin '>Playwood arm chair</h3>
                    <div className="flex items-center gap-5">
                        <div className="flex text-yellow-400">
                        <p><IoIosStar /></p>
                        <p><IoIosStar /></p>
                        <p><IoIosStar /></p>
                        <p><IoIosStar /></p>
                        <p><IoIosStar /></p>
                        </div>
                        <p> (22) </p>
                    </div>
                    <p className='font-bold mt-2'>$32.00 <span className='text-red-500 pl-5 line-through '>$32.00</span> </p>
                    <p className='font-bold mt-2'>Color</p>
                    <p className='text-[#8f8f97] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus <br /> porttitor purus, et volutpat sit.</p>
                    <h5 className='flex gap-5 font-bold items-center mt-5 font-josefin pl-10'>Add To Cart <FaRegHeart /></h5>
                    <p className=' font-josefin mt-3 '>Categories:</p>
                    <p className=' font-josefin mt-2'>Tags</p>
                    <div className="flex gap-5 items-center mt-2">
                    <p className=' font-josefin'>Share</p>
                    <div className="flex gap-3">
                        <p><FaFacebook /></p>
                        <p><FaInstagramSquare /></p>
                        <p><AiFillTwitterCircle /></p>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default Details
