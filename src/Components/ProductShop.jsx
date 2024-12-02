import React, { useContext, useEffect, useState } from 'react'
import { apiData } from './ContextApi'
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSearchPlus } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";

const ProductShop = () => {
    let shopApiProduct = useContext(apiData)
    
   let [category, setCategory] = useState([])
   let [brand, setBrand] = useState([])
   let [price, setPrice] = useState([])



   useEffect(() => {
        setCategory([...new Set(shopApiProduct.map((item)=> item.category))])
        setBrand([...new Set(shopApiProduct.map((item)=> item.brand))])
        setPrice([...new Set(shopApiProduct.map((item)=> item.price))])


   }, [shopApiProduct])

  
   let [categoryShow, setCategoryShow] = useState(false)
   let [brandShow, setBrandShow] = useState(false)
   let [priceShow, setPriceShow] = useState(false)


     let [categoryItem, setCategoryItem] = useState([])
     let [brandItem, setBrandItem] = useState([])
     let [priceItem, setPriceItem] = useState([])



    const hendleCategory = (c) => {
        let filteredProduct = shopApiProduct.filter((item) => item.category == c)
        setCategoryItem(filteredProduct)

       
        
    }

    


    
    
  return (
    <>
      <div className="container mx-auto md:flex justify-between py-10   ">
        <div className="md:w-[18%]  w-[60%]  " >

          <div className="  ">
              <div className=" ">
                  <h1 onClick={() => setCategoryShow(!categoryShow)} className='flex items-center font-bold cursor-pointer'>Shop By Category <span className='ml-5'><TiArrowSortedDown /></span></h1>
                  
              </div>
              {categoryShow &&
                  <ul className='overflow-y-scroll h-36'>
                  {category.map((item) =>(
                    <li className='cursor-pointer md:bg-white bg-[#30e0dd] border mb-2 pl-2 py-1 shadow-md ' onClick={() => hendleCategory (item)}>{item}</li>
                  ))}          
            </ul>
              }
          </div>

          <div className="mt-2  ">
              <div className=" ">
                  <h1 onClick={() => setBrandShow(!brandShow)} className='flex items-center font-bold cursor-pointer'>Shop By Brand <span className='ml-5'><TiArrowSortedDown /></span></h1>
                  
              </div>
              {brandShow &&
                  <ul className='overflow-y-scroll h-36'>
                  {brand.map((item) =>(
                    <li className='cursor-pointer md:bg-white bg-[#30e0dd] border mb-2 pl-2 py-1 shadow-md  ' onClick={() => hendleCategory (item)}>{item}</li>
                  ))}          
            </ul>
              }
          </div>

          <div className="mt-2  ">
              <div className=" ">
                  <h1 onClick={() => setPriceShow(!priceShow)} className='flex items-center font-bold cursor-pointer'>Shop By Price <span className='ml-5'><TiArrowSortedDown /></span></h1>
                  
              </div>
              {priceShow &&
                  <ul className='overflow-y-scroll h-36'>
                  {price.map((item) =>(
                    <li className='cursor-pointer md:bg-white bg-[#30e0dd] border mb-2 pl-2 py-1 shadow-md  ' onClick={() => hendleCategory (item)}>{item}</li>
                  ))}          
            </ul>
              }
          </div>

        </div>
     
        

        <div className="md:w-[80%] flex flex-wrap gap-4 overflow-y-scroll h-[500px] mt-5 ">

            {categoryItem.length == 0 ? 
            shopApiProduct.map((item) => (
              
               <div className="border md:w-[250px] w-[150px] md:h-[363px] h-[280px] text-center shadow-xl group relative overflow-hidden ">
                 <img className='border bg-[#f5f5f8] group-hover:bg-[#bad9c899] ' src={item.thumbnail} alt="" />
                <div className="absolute top-10 md:top-32 -left-10 md:group-hover:left-5 group-hover:left-3  group-hover:duration-700 group-hover:text-blue-500 ">
                  <p><LuShoppingCart /></p>
                  <p className='mt-3'><FiHeart /></p>
                  <p className='mt-3'><FaSearchPlus /></p>
                </div>

                <div className="">
                  <h4 className='font-bold'>{item.title} </h4>
                  <p className='relative bottom-20'><span className='text-[80px] text-[#f227a1] '>.</span><span className='text-[80px] text-[#f53044] '>.</span><span className='text-[80px] text-[#3330eb] '>.</span></p>
                  <p className='relative bottom-24'>{item.price} <span className='text-primary ml-2'>{item.discountPercentage}</span> </p>
                </div>
               </div>
            ))                         
            :
            categoryItem.map((item) => (
                <div className="border w-[250px] h-[363px] text-center shadow-xl group relative    ">
                  <img className='border bg-[#f5f5f8] group-hover:bg-[#bad9c899] ' src={item.thumbnail} alt="" />
                  <div className="absolute  top-10 md:top-32 -left-10 md:group-hover:left-5 group-hover:left-3 group-hover:duration-700 group-hover:text-blue-500 ">
                  <p><LuShoppingCart /></p>
                  <p className='mt-3'><FiHeart /></p>
                  <p className='mt-3'><FaSearchPlus /></p>
                </div>

                <div className="">
                  <h4 className='font-bold'>{item.title} </h4>
                  <p className='relative bottom-20'><span className='text-[80px] text-[#f227a1] '>.</span><span className='text-[80px] text-[#f53044] '>.</span><span className='text-[80px] text-[#3330eb] '>.</span></p>
                  <p className='relative bottom-24'>{item.price} <span className='text-primary ml-2'>{item.discountPercentage}</span> </p>
                </div>
                  
                </div>
             ))
                 
            }
            



        </div>

        

      </div>
    </>
  )
}

export default ProductShop
