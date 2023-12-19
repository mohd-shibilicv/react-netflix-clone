import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    }

  return (
    <>
    <div className="w-full h-screen">
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-md">
                <div className="max-w-[320px] mx-auto py-16">
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    {error && <p className='mt-2 p-2 bg-red-500 rounded'>{error}</p>}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input className='p-3 my-2 text-gray-100 bg-gray-700 rounded' type="email" placeholder="Email" autoComplete='email' onChange={(e) => setEmail(e.target.value)} />
                        <input className='p-3 my-2 text-gray-100  bg-gray-700 rounded' type="password" placeholder="Password" autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
                        <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
                        <div className='flex justify-between items-center text-md text-gray-600'>
                            <p><input type="checkbox" className='mr-2'/>Remember me</p>
                            <p className='cursor-pointer underline'>Need help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600 mr-2'>New to Netflix?</span>
                            <Link to='/signup' className='hover:underline'>
                                Sign up now
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login