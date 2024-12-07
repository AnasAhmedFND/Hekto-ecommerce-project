import React from 'react'
import Lamp from '../assets/lamp.png'
import All from '../assets/all.png'
import Slider from "react-slick";
import './Heroses.css'
import ButtonShop from './ButtonShop';
import { Link } from 'react-router-dom';
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
    <>
    <section className='bg-[#f2eff2] px-2 md:px-0'>      

        <Slider {...settings}>
          
          <div className="">
            <div className=" md:flex md:px-10 md:pb-20 pb-5   bg-[#f2eff2] md:justify-between ">
              <div className="">
                  <img className='md:w-[100%] w-[50%] ' src={Lamp} alt="" />
                  
              </div>

             <div className=" flex flex-col-reverse md:flex md:flex-row  ">
             <div className="md:mt-36 relative md:right-16 ">
                  <p className='text-primary'>Best Furniture For Your Castle....</p>
                  <h1 className='md:text-4xl font-josefin text-xl mt-4'>New Furniture Collection <br />Trends in 2020</h1>
                  <p className='mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  dipiscing in phasellus non in justo.</p>
                  
                  <p> <Link to='/shop'><ButtonShop/></Link> </p>
              </div>

              <div className="md:w-[40%] w-[80%] md:mt-20 relative md:right-10 md:py-0 py-5 md:-left-10 left-[10%] ">
                  <img src={All} alt="" />          

              </div>
             </div>

          </div>
          </div>
          
          <div className="">
            <div className=" md:flex md:px-10 md:pb-20 pb-5  bg-[#f2eff2] md:justify-between ">
            <div className="">
                <img className='md:w-[100%] w-[50%] ' src={Lamp} alt="" />
                
            </div>
           
           <div className=" flex flex-col-reverse md:flex md:flex-row  ">
             <div className="md:mt-36 relative md:right-16 ">
                  <p className='text-primary'>Best Furniture For Your Castle....</p>
                  <h1 className='md:text-4xl font-josefin text-xl mt-4'>New Furniture Collection <br />Trends in 2020</h1>                  
                  <p className='mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  dipiscing in phasellus non in justo.</p>
                  
                  <p> <Link to='/shop'><ButtonShop/></Link> </p>
              </div>

              <div className="md:w-[40%] w-[80%] md:mt-20 relative md:right-10 md:py-0 py-5 md:-left-10 left-[10%] ">
                  <img src={All} alt="" />          

              </div>
             </div>
            

          </div>
          </div>
          
        <div className="">
            <div className=" md:flex md:px-10 md:pb-20 pb-5  bg-[#f2eff2] md:justify-between ">
            <div className="">
                <img className='md:w-[100%] w-[50%] ' src={Lamp} alt="" />
                
            </div>

            <div className=" flex flex-col-reverse md:flex md:flex-row  ">
             <div className="md:mt-36 relative md:right-16 ">
                  <p className='text-primary'>Best Furniture For Your Castle....</p>
                  <h1 className='md:text-4xl font-josefin text-xl mt-4'>New Furniture Collection <br />Trends in 2020</h1>
                  <p className='mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  dipiscing in phasellus non in justo.</p>

                  <p> <Link to='/shop'><ButtonShop/></Link> </p>
              </div>

              <div className="md:w-[40%] w-[80%] md:mt-20 relative md:right-10 md:py-0 py-5 md:-left-10 left-[10%] ">
                  <img src={All} alt="" />          

              </div>
             </div>


          </div>
          </div>
        
          
          
        </Slider>
         

    </section>

  

      




    </>
  )
}

export default Hero
