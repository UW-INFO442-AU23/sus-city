import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";
import _ from 'lodash';

// import all components pages
import Compare from "./components/Compare/compare";
import Home from "./components/Home/home";
import Quiz from "./components/Quiz/quiz";
import Questionary from "./components/Quiz/questionary.js";
import Search from "./components/Search/search";
import Navbar from './components/Navbar/navbar';
import About from './components/About/about';


export default function App(props) {
    let cars = props.cars;
    return (
      <div>
        <Routes>
          <Route path="/" element={<Navbar/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/Compare" element={<Compare cars={cars}/>} />
              <Route path="/Quiz" element={<Quiz/>} />
              <Route path="/Quiz/Questionary" element={<Questionary cars={cars}/>} />
              <Route path="/Search" element={<Search cars={cars}/>} />
              <Route path="/About" element={<About/>} />
          </Route>
        </Routes> 
      </div>
    );
  }
  