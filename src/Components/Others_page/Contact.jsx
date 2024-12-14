import React from 'react'
import Cont from '../img/contact_ph.png'


const Contact = () => {
    return (
        <>
            <div className="container mx-auto md:py-20 py-10">
                <div className="md:flex">
                    <div className=" md:w-1/2 py-5 px-2">
                        <h2 className='font-bold text-2xl font-josefin text-orgain  '>Information About Us</h2>
                        <p className='md:text-[14px]  pt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <div className="flex gap-3 mt-5">
                        <p className='w-5 h-5 bg-blue-700 rounded-full'></p>
                        <p className='w-5 h-5 bg-[#fb24ba] rounded-full'></p>
                        <p className='w-5 h-5 bg-[#24e9fa] rounded-full'></p>


                        </div>
                    </div>
                    <div className="md:w-1/2  py-5 px-2">
                        <h2 className='font-bold text-2xl font-josefin text-orgain'>Contadct Way</h2>
                        <div className=" flex justify-between mt-5">
                            <div className="flex w-1/2  gap-2 items-center">
                                <p className=' w-5 h-5 bg-blue-800  rounded-full '></p>
                                <p className='text-[12px] '>Tel: 877-67-88-99 <br />E-Mail: shop@store.com </p>
                            </div>
                            <div className="flex w-1/2 items-center gap-2 text-[12px]">
                            <p className=' w-5 h-5 bg-biguni  rounded-full '></p>
                                <p className='text-[12px ] '>Support Forum <br />For over 24hr </p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="w-1/2 items-center gap-2 flex text-[12px]">
                            <p className=' w-5 h-5 bg-[#d29732]  rounded-full '></p>
                                <p>20 Margaret st, London <br /> Great britain, 3NM98-LK</p>
                            </div>
                            <div className="w-1/2 items-center gap-2 flex text-[12px] ">
                            <p className=' w-5 h-5 bg-[#2bf256]  rounded-full '></p>
                                <p>Free standard shipping <br /> on all orders.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:pt-20 pt-10 pb-10 md:flex md:flex-row flex flex-col-reverse">
                    <div className=" md:w-1/2 md:px-0 px-2">
                        <h2 className='font-bold text-2xl font-josefin text-orgain '>Get In Touch</h2>
                        <p className='text-[14px] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                        <div className=" mt-5">
                            <div className="md:flex justify-between">
                                <input className='border-2 md:w-[48%] w-full py-2 pl-2 outline-none rounded-md  ' type="text" placeholder='Your Name*' />
                                <input className='border-2 md:w-[48%] w-full py-2 pl-2 outline-none rounded-md md:mt-0 mt-5 ' type="text" placeholder='Your E-mail' />

                            </div>
                            <input className='border-2 w-full py-2 pl-2 mt-8 outline-none rounded-md  ' type="text" placeholder='Subject*' />
                            <textarea className='border-2 mt-8 w-full pl-2 outline-none rounded-md' name="text" id="#" placeholder='Text Your Massege*' ></textarea>
                            <button className='borded bg-biguni py-2 px-5 text-white rounded-md mt-5'>Send Mail</button>
                        </div>
                    </div>
                    <div className=" md:w-1/2 px-2 md:px-0 md:mr-0 mr-1 ">
                        <img src={Cont} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
