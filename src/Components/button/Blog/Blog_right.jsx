import React, { useContext } from 'react'
import { apiData } from '../../ContextApi'
import { FaPenNib } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const Blog_right = () => {
 const blogData = useContext(apiData)
 
 let filter = blogData.filter((item) => item.id >= 11 && item.id <= 13);
  return (
    <>
      <div className="container mx-auto py-20 ">
        {filter.map((item) => (
          <div className=" w-[70%] mb-10 ">
            <img className='border w-full h-[380px] bg-[#edf4f4] rounded-lg ' src={item.thumbnail} alt="" />
            <div className="flex mt-4 items-center" >
              <p className='text-red-500'><FaPenNib /></p>
              <p className='ml-4 border px-5 bg-[#FFE7F9] font-josefin text-orgain rounded-sm rounded-t-full'>Surf Auxion</p>
              <p className='ml-8 text-[#dd5c6f] '> <MdOutlineDateRange /></p>
              <p className='ml-4 bg-[#FFECE2] px-5 font-josefin text-orgain rounded-sm rounded-t-full'>Dec 15 2025</p>

            </div>
            <h2 className=' font-bold text-2xl text-orgain font-josefin mt-6'>Mauris at orci non vulputate diam tincidunt nec.</h2>
           <p className='mt-6 text-[13px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum  eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>

           <button className='mt-5 font-bold '>Read More <span className='text-red-500'>*</span></button>
          </div>

        ))}
      </div>
    </>
  )
}

export default Blog_right
