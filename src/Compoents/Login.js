import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData, checkValidData1 } from '../utiles/Validate'
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utiles/firebase';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate(); 

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () =>{
        //Validate the Form 
        console.log(email.current?.value);
        console.log(password.current?.value);
        console.log(name.current?.value);
      
        let validation;
        let validation1;

        if(isSignInForm ){
         validation = checkValidData(email.current?.value, password.current?.value);
        setErrorMessage(validation);
        console.log(validation);}
        else{
         validation1 = checkValidData1(name.current?.value);
        setErrorMessage(validation1);}
        

    
        if(validation || validation1) return;  //if validation value is null that means email and password valid then not return a funtion go to next line. if validation value is email not vaild or password not valid then return a handleclick function & not to go next line.

  if(!isSignInForm){
            //Sign Up form Logic
            createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
          .then((userCredential) => {
           // Signed up 
         const user = userCredential.user;
         console.log(user);
         navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" + errorMessage);
    // ..
  });
}
   else{
        //Sign In form Logic
         signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
        .then((userCredential) => {
    // Signed in 
         const user = userCredential.user;
         console.log(user);
         navigate("/browse");
    // ...
  })
      .catch((error) => {
      const errorCode = error.code;
      //const errorMessage = error.message;
      setErrorMessage(errorCode );
  });
       }
    }

  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="Background" />
        </div>
        <form onSubmit={(e)=>
          e.preventDefault()
        } className='w-3/12 text-white p-8 bg-black absolute my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
            
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm ?"Sign In":"Sign Up"}</h1>
            { !isSignInForm && <input ref={name} type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700'/>
            }

            <input ref={email} type="text" placeholder="Email" className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type="Password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-700 font-bold text-xl p-2'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full' onClick={handleButtonClick}>{isSignInForm ?"Sign In":"Sign Up"}</button>
            <p  onClick={toggleSignInForm} className='cursor-pointer' >{
                isSignInForm?"New User? Sign Up Now" : "Already registered? Sign In Now"
            }</p>
        </form>

    </div>
  )
}

export default Login