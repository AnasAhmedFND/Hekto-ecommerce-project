import React, { useContext, useState } from 'react'
import Logo from '../assets/Logo.png'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { apiData } from './ContextApi';


const Navbar = () => {
  let mainData = useContext(apiData)

  let [menuShow, setMenuShow] = useState(false)

  const handleMenu = () => {

    setMenuShow(!menuShow);
  }

  // Search input value...................................
  let [input, setInput] = useState('')
  let [searchFilterProduct, setSearchFilterProduct] = useState([])

  const handleInput = (e) => {
    if(e.target.value !== "") {

      let searchProduct = mainData.filter((item) => item.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
      setSearchFilterProduct(searchProduct);
    }else{
      setSearchFilterProduct([])
    }

  }


  return (
    <>
    <div className="px-2 md:px-0">

      <div className={`flex md:justify-between md:px-20 md:py-5 py-3 md:items-center gap-5 ${menuShow ? 'pb-60' : 'pb-3'}`}>
        <div className="">
        <Link to='/' ><img  src={Logo} alt="" />  </Link>          
        </div>

        <div className="md:flex md:justify-between  w-[80%] ">
          <ul className={`md:flex md:gap-5  font-lato items-center md:static md:border-none border md:bg-white bg-[#161651] md:text-black text-white md:px-0 px-2 duration-700 ease-linear ${menuShow ? 'absolute top-32 left-2 pb-14 ' : 'absolute top-0 -left-72'}`}>
            <li className='hover:text-primary'><Link to='/'>Home</Link></li>
            <li className='hover:text-primary'><Link to='/about' >Pages</Link> </li>
            <li className='hover:text-primary'><Link to='/product'>Products</Link> </li>
            <li className='hover:text-primary'><Link to='/blog' >Blog</Link></li>
            <li className='hover:text-primary'><Link to='/shop' >Shop</Link> </li>
            <li className='hover:text-primary'><Link to='/contact'>Contact</Link></li>
            <li className='md:ml-72 '>
              <div className="flex ">

                <div className="relative">

                  <div className="">
                    <input onChange={handleInput} className='border border-black outline-none text-black ' type="Search" />
                  </div>
                  <div className="absolute z-20 top-8 left-0  ">
                    {searchFilterProduct.map((item) => (
                      <div className="flex border bg-white items-center cursor-pointer">
                        <img className='w-[40px] border-r-2 pr-2' src={item.thumbnail} alt="" />
                        <h5 className='  rounded-sm bg-white px-1 text-[12px] text-black'>{item.title} </h5>
                      </div>
                    ))}
                  </div>
                </div>

                <p className='border border-red-600 w-10 text-white items-center flex justify-center bg-biguni '><CiSearch /> </p>
              </div>
            </li>
          </ul>

        </div>

        <div onClick={handleMenu} className="md:hidden">
          {menuShow === true ? <RxCross2 className='text-[25px] ' /> : <IoMenu className='text-[25px] ' />}
        </div>



      </div>
    </div>
    </>
  )
}

export default Navbar
