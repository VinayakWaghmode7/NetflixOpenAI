// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE6TTdToMXNV3Cz4meLcFUkylsuyUoSzw",
  authDomain: "netflixopenai.firebaseapp.com",
  projectId: "netflixopenai",
  storageBucket: "netflixopenai.appspot.com",
  messagingSenderId: "1049286689081",
  appId: "1:1049286689081:web:564120b7d3f694d96668e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth();
