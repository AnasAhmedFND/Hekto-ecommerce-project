import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Description = () => {
  return (
    <>
      <div className="bg-[#e1e1ea] py-10">
        <div className="container mx-auto">

        <div className="flex font-bold text-xl font-josefin gap-16 ">
            <h3 className='hover:underline'>Description</h3>
            <h3 className='hover:underline'>Additional Info</h3>
            <h3 className='hover:underline'>Reviews</h3>
            <h3 className='hover:underline'>Video</h3>
        </div>
        <h3 className='font-bold font-josefin text-lg mt-10'>Varius tempor</h3>
        <p className='text-[14px] mt-4 text-[#7f7f86] border border-red-600  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. <br /> Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus <br /> cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        <h3 className='font-bold font-josefin text-lg mt-8'>More details</h3>
        <p className='flex items-center gap-4 text-[14px] text-[#7f7f86] mt-4'><span className='text-black'><FaArrowRight /></span>  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        <p className='flex items-center gap-4 text-[14px] text-[#7f7f86] '><span className='text-black '><FaArrowRight /></span>  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        <p className='flex items-center gap-4 text-[14px] text-[#7f7f86] '><span className='text-black '><FaArrowRight /></span>  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        <p className='flex items-center gap-4 text-[14px] text-[#7f7f86] '><span className='text-black '><FaArrowRight /></span>  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
       
        </div>
      </div>
    </>
  )
}

export default Description
