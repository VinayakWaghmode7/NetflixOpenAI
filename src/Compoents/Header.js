import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import {auth } from '../utiles/firebase'
import { useNavigate } from 'react-router-dom';


function Header() {

  const navigate = useNavigate();
  
 
  // var handleSignOut =  () => {
  //   signOut(auth)
  //   .then(() => {
  //     window.location.href = '/';

  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  //   window.location.href = '/error';

  // });
  //   };

  //  useEffect(() => {
    
  //   handleSignOut();
  // },[]);

  const handleSignOut = async () => {
    console.log('Before signOut');
    try {
      await signOut(auth);
      console.log('After signOut - before dispatch');
      // Dispatch the removeUser action

      navigate('/');
      console.log('After navigate');
      // Sign-out successfully.
    } catch (error) {
      // An error happened.
      console.error('Error during sign out:', error);
      navigate('/error');
    }
  };
  

 

  
  

  return (
    <div className='absolute flex justify-between w-screen px-7 py-2 bg-gradient-to-b from-black z-10'>
    <img className='w-44 ' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
     alt="logo" />

     <div className='flex'>
     <img className='w-9 h-9 mt-5' src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
     alt="UserLogo"/>
     <button onClick={handleSignOut}  className='text-white font-bold p-3'>SignOut</button>
     </div>
    </div>
  )
}

export default Header