import React from 'react'

const Login = () => {
    return (
        <>
            <div className="container mx-auto md:py-20 py-10 ">
                <div className="border md:w-1/2 w-[90%] items-center px-10 py-10 mx-auto shadow-xl rounded-lg">

                    <h2 className='md:text-4xl text-2xl font-bold font-josefin text-center  '>Login</h2>
                    <p className='text-center text-[#4d4d5d] '>Please login using account detail bellow. <br /> </p>
                    <div className="">
                        <input className='border mt-8 p-2 w-full rounded-md ' type="text" placeholder='Email Address' />
                        <input className='border mt-5 p-2 w-full rounded-md ' type="password" placeholder='Password' />
                    </div>
                    <p className='mt-4 text-[#4d4d5d]'>Forgot Your Password?</p>
                    <button className='border py-2 text-center bg-biguni mt-8 text-white w-full rounded-md font-bold font-josefin'>Sign in</button>
                    <p className='text-center mt-5 text-[#4d4d5d]'>Don’t have an Account?Create account</p>
                </div>
            </div>
        </>
    )
}

export default Login
