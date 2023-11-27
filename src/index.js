import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import CARS_DATA from './data/cars.json'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App cars={CARS_DATA}/>
  </BrowserRouter>
);

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs5j0Vj39f2z74FADvgi5ZIdqcxsRwctk",
  authDomain: "x-scape-37f08.firebaseapp.com",
  projectId: "x-scape-37f08",
  storageBucket: "x-scape-37f08.appspot.com",
  messagingSenderId: "203865458078",
  appId: "1:203865458078:web:692728de0c9fd9e9f2028f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

