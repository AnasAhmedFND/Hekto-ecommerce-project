import React, { useContext } from 'react'
import { IoMdStar } from "react-icons/io";
import { apiData } from '../ContextApi';

const Related = () => {
    let relatedApiData = useContext(apiData)
    let relatedFilter = relatedApiData.filter((item) => item.id >= 41 && item.id <= 44);
  return (
    <>
      <div className="container mx-auto py-20 ">
        <h2 className='font-bold text-2xl font-josefin'>Related Products</h2>
        <div className="flex justify-between pt-5">
            {relatedFilter.map((item) => (
                <div className=" w-[240px]   ">

                    <img className='border bg-[#e8e8ef] rounded-lg ' src={item.thumbnail} alt="" />
                    <div className="flex items-center justify-between pt-4 px-2 font-josefin ">
                    <p className='font-bold'>{item.title} </p>
                    <p className='flex text-yellow-400 '> <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar /> </p>
                    </div>
                    <p className='font-bold px-2 font-josefin'> ${item.price} </p>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Related
