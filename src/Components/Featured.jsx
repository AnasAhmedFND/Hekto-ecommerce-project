import React, { useContext } from 'react'
import { apiData } from './ContextApi';
import Slider from "react-slick";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import Viewdetails from './button/Viewdetails';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToWish } from './slice/wishSlice';

const Featured = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let info = useContext(apiData)
  let filter = info.filter((item) => item.id >= 1 && item.id <= 6)

  // cart product in page........................
  let dispatch = useDispatch();
  let hendelAddToCart = (product) => {
    dispatch(addToCart({ ...product, qty: 1 }))
    toast.success('Added to cart')
  }

  // wish item hendele ..........................
  let hendelAddToWish = (item) => {
    dispatch(addToWish({...item, qty: 1}))
    toast.success('Added to wish')
  }

  return (
    <>
      <div className="container mx-auto mt-10 ">
        <h1 className='text-center text-2xl font-bold font-josefin mt-20 pb-10 text-[#151875]'>Featured Products</h1>


        <div className="  pb-14   ">
          <Slider {...settings} >{
            filter.map((item) => (
              <div className=" group w-[240px]  md:px-2  bg-white ">

                <div className="flex flex-col justify-center border  pb-12 pt-5  relative overflow-hidden bg-[#e9e9ec]  rounded-t-lg ">
                  <img className='w-[70%]  md:ml-8 ml-10  mt-5  ' src={item.thumbnail} alt="" />

                  <p className='absolute -bottom-16  left-1/2 -translate-x-1/2  duration-700 ease-in-out group-hover:bottom-4 text-center '>  <Link to={`/shop/${item.id}`}> <Viewdetails /> </Link> </p>

                  <div className="flex gap-5 absolute top-2 -left-40  duration-700 group-hover:left-2 ">
                    <p onClick={() => hendelAddToWish(item)} className='border p-2 rounded-full bg-[#e1e1eb] text-blue-400 hover:bg-biguni hover:text-white'> <FaRegHeart className='cursor-pointer' /></p>
                    <ToastContainer
                      position="top-center"
                      autoClose={1000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"                     
                    />
                    <p className='border p-2 rounded-full bg-[#e1e1eb] text-blue-400 relative right-5 hover:bg-biguni hover:text-white cursor-pointer'> <FaSearchPlus /></p>
                    
                    <p onClick={() => hendelAddToCart(item)} className='border p-2 rounded-full bg-[#e1e1eb] text-blue-400 cursor-pointer relative right-5 hover:bg-biguni hover:text-white'><RiShoppingCartLine />  </p>
                    <ToastContainer
                      position="top-center"
                      autoClose={1000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"                     
                    />

                  </div>
                </div>

                <div className=" border  text-center group-hover:bg-blue-600 group-hover:text-white       ">
                  <h2 className='text-primary text-md group-hover:text-white'>{item.title}</h2>
                  <p className='relative bottom-4 '>  <span className='text-green-500 font-bold text-5xl'>-</span> <span className='text-primary font-bold text-5xl'>-</span> <span className='text-blue-700 font-bold text-5xl'>-</span>    </p>
                  <p className=' relative bottom-3 text-sm '>Code . Y523201</p>
                  <p className=' relative bottom-3 text-sm '>{item.price}</p>

                </div>
              </div>

            ))




          }

          </Slider>
        </div>


      </div>



    </>
  )
}

export default Featured
