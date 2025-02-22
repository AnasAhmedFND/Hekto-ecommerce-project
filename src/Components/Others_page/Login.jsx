import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Login = () => {


    const auth = getAuth()

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [errorMessage, setErrorMessage] = useState('')
    let [errorMessage2, setErrorMessage2] = useState('')
    let [success, setSucces] = useState('');

    let navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setErrorMessage('')
    }




    const handleSubmit = () => {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrorMessage('')

        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrorMessage('Email your rong!')

        }
        if (!password) {
            setErrorMessage2('password your rong!')
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setErrorMessage2('password in lowercase add.')
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setErrorMessage2('password in uppercase add.')
        } else if (!/(?=.*[0-9])/.test(password)) {
            setErrorMessage2('password in Number add.')
        } else if (!/(?=.{8,})/.test(password)) {
            setErrorMessage2('password in eight characters.')
        } else if (/(?=.{8,})/.test(password)) {
            setErrorMessage2(' ')
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSucces('congratulation MD for create your account');
                setTimeout(() => {
                    navigate('/login')
                }, 2000)

            })
            .catch((error) => {
                const err = error.code;
                if(err.includes('auth/email-already-in-use')){
                    setSucces('This email all redy existe');
                } else{
                    setErrorMessage('')
                    setErrorMessage2('')
                }

            });

    }


    return (
        <>
            <div className="container mx-auto md:py-20 py-10 ">
                <div className="border md:w-1/2 w-[90%] items-center px-10 py-10 mx-auto shadow-xl rounded-lg">

                    <h2 className='md:text-4xl text-2xl font-bold font-josefin text-center  '>Register</h2>
                    <p className='text-center text-[#4d4d5d] '>Please login using account detail bellow. <br /> </p>
                    <div className="">
                        <input onChange={(e) => setEmail(e.target.value)} className='border mt-8 p-2 w-full rounded-md ' type="text" placeholder='Email Address' />
                        {errorMessage &&
                            <p className='bg-biguni py-1 pl-2 rounded-md text-white  mt-1'>{errorMessage} </p>

                        }
                        <input onChange={(e) => setPassword(e.target.value)} className='border mt-5 p-2 w-full rounded-md ' type="password" placeholder='Password' />
                        {errorMessage2 &&
                            <p className=' bg-biguni py-1 pl-2 rounded-md text-white mt-1'> {errorMessage2} </p>
                        }
                    </div>
                    <p className='mt-4 text-[#4d4d5d]'>Forgot Your Password?</p>
                    <button onClick={() => handleSubmit()} className='border py-2 text-center bg-biguni mt-8 text-white w-full rounded-md font-bold font-josefin'>Sign in</button>
                    <p className='text-center mt-5 text-[#4d4d5d]'><Link to='/demo' >Don’t have an Account?Create account</Link> </p>
                </div>
            </div>
        </>
    )
}

export default Login
