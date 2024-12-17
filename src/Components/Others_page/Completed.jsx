import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import Clock from '../img/clock1.png'
import Node from '../img/node.png'
import { Link } from 'react-router-dom';

const Completed = () => {
    return (
        <>
            <div className="container mx-auto py-20">
                <div className=" w-[80%] ml-[10%] py-10 border-dotted border-l-2 border-b-2 shadow-lg relative">
                    <p ><GiCheckMark className=' text-primary text-[55px] ml-[48%] border-4 rounded-full p-1 bg-white'/></p>
                    <h2 className='text-center font-bold font-josefin text-orgain text-2xl mt-2 '>Your Order Is Completed!</h2>
                    <p className='text-center w-[70%] mx-auto mt-5'>Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                    </p>
                    <button className='py-2 px-5 text-white bg-biguni rounded-sm ml-[41%] mt-10 '><Link to="/shop" > Continue Shopping</Link></button>

                </div>
                
                    <img className='absolute bottom-[55px]  left-[177px] ' src={Clock} alt="" />
                    <img className='relative left-[900px] bottom-8  ' src={Node} alt="" />

                
            </div>
        </>
    )
}

export default Completed
