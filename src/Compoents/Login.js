import React, { useState } from 'react'
import Header from './Header'

function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="Background" />
        </div>
        <form className='w-3/12 text-white p-8 bg-black absolute my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm ?"Sign In":"Sign Up"}</h1>
            <input type="text" placeholder="Email" className='p-4 my-4 w-full bg-gray-700'/>
            <input type="Password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 bg-red-700 w-full'>{isSignInForm ?"Sign In":"Sign Up"}</button>
            <p onClick={toggleSignInForm}>New User? Sign Up Now</p>
        </form>

    </div>
  )
}

export default Login