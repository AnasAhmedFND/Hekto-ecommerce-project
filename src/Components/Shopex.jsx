import React from 'react'
import Car from '../assets/shopex/shopex1.png'
import Dollar from '../assets/shopex/shopex2.png'
import Logo from '../assets/shopex/shopex3.png'
import Contact from '../assets/shopex/shopex4.png'

const Shopex = () => {
  return (
    <>

    <div className="container mx-auto">
        <h2 className='text-2xl font-bold mt-10 font-josefin text-center text-[#151875] '>What Shopex Offer!</h2>

      <div className="container md:mx-auto md:flex justify-items-center    md:col-span-4  md:justify-between mt-8 md:mt-14 pb-10">

        <div className=" w-[220px] text-center  px-3 py-8 shadow-lg   ">
            <img className=' mx-auto ' src={Car} alt="" />
            <h2 className='text-2xl font-bold mt-5'>24/7 Support</h2>
            <p className='mt-5 text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        <div className=" w-[220px]  text-center   px-3 py-8 shadow-lg">
            <img className=' mx-auto ' src={Dollar} alt="" />
            <h2 className='text-2xl font-bold mt-5'>24/7 Support</h2>
            <p className='mt-5 text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        <div className=" w-[220px]  text-center   px-3 py-8 shadow-lg">
            <img className=' mx-auto ' src={Logo} alt="" />
            <h2 className='text-2xl font-bold mt-5'>24/7 Support</h2>
            <p className='mt-5 text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        <div className=" w-[220px] text-center    px-3 py-8 shadow-lg">
            <img className=' mx-auto ' src={Contact} alt="" />
            <h2 className='text-2xl font-bold mt-5'>24/7 Support</h2>
            <p className='mt-5 text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

      </div>

    </div>
    </>
  )
}

export default Shopex
