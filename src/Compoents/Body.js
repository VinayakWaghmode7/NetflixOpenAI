import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utiles/firebase';
import { addUser,removeUser } from '../utiles/userSlice';
import { useDispatch } from 'react-redux'


function Body() {
    const appRouter = createBrowserRouter([
        {
            path : '/',
            element : <Login/>

        },
        {
            path: '/browse',
            element : <Browse/>
        }
    ]);

    const dispatch = useDispatch();
    
  
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
         
          // ...
        } else {
          dispatch(removeUser());
        
          // User is signed out
          // ...
        }
      });
      
  
    },[])

  return (
    <div>
        <RouterProvider router = {appRouter} />
    </div>
  )
}

export default Body