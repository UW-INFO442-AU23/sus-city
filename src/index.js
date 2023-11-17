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
  apiKey: "AIzaSyCveLxr9mU3x4RxyDKFO2nkpuiU1HD9HOk",
  authDomain: "xscape-66601.firebaseapp.com",
  projectId: "xscape-66601",
  storageBucket: "xscape-66601.appspot.com",
  messagingSenderId: "1005450554068",
  appId: "1:1005450554068:web:4fe306eefe44ccc2a36941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

