import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";

// import all components pages
import Compare from "./components/Compare/compare";
import Home from "./components/Home/home";
import Quiz from "./components/Quiz/quiz";
import Search from "./components/Search/search";
import Navbar from './components/Navbar/navbar';


export default function App(props) {
    return (
      <div>
        <Router>
          <div>
            <Navbar>
              <Route path="/" element={<Home/>} />
              <Route path="/Compare" element={<Compare/>} />
              <Route path="/Quiz" element={<Quiz/>} />
              <Route path="/Search" element={<Search/>} />
            </Navbar>
          </div>
        </Router> 
      </div>
    );
  }
  