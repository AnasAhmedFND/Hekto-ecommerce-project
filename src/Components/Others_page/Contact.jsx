import React from 'react'


const Contact = () => {
    return (
        <>
            <div className="container mx-auto py-20">
                <div className="flex">
                    <div className=" w-1/2 py-5 px-2">
                        <h2 className='font-bold text-2xl font-josefin text-orgain  '>Information About Us</h2>
                        <p className='text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <div className="flex gap-3 mt-5">
                        <p className='w-5 h-5 bg-blue-700 rounded-full'></p>
                        <p className='w-5 h-5 bg-[#fb24ba] rounded-full'></p>
                        <p className='w-5 h-5 bg-[#24e9fa] rounded-full'></p>


                        </div>
                    </div>
                    <div className="w-1/2  py-5 px-2">
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

                <div className="">
                    <div className="">
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                        <div className="">
                            <div className="">
                                <input type="text" placeholder='Your Name*' />
                                <input type="text" placeholder='Your E-mail' />

                            </div>
                            <input type="text" placeholder='Subject*' />
                            <textarea name="" id="" placeholder='Text Your Massege*' ></textarea>
                            <button>Send Mail</button>
                        </div>
                    </div>
                    <div className="">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
