import { Provider, useDispatch } from 'react-redux';
import './App.css';
import Body from './Compoents/Body';
import appStore from './utiles/appStore';
import { useEffect } from 'react';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './utiles/firebase';
import { addUser,removeUser } from './utiles/userSlice';
import { useNavigate } from 'react-router-dom';


function App() {

 

  return (
    <div >
      <Provider store={appStore}><Body/>
      </Provider>
    </div>
    
  );
}

export default App;
