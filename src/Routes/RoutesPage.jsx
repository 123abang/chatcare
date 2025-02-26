import React from 'react';
import Home from '../components/Home';
import OurServices from '../pages/Services';
import AboutUs from '../pages/Aboutus';
import ContactUs from '../pages/Contact';
// import { Router,Route,Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Apps = () => {
  return (
    <div> {/* Wrapping the components inside a parent div */}

      <Router>
        <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/services' element={< OurServices/>}/>
          <Route path='/aboutus' element={< AboutUs/>}/>
          <Route path='/contactus' element={< ContactUs/>}/>


        </Routes>
      </Router>
      
    </div>
  );
};

export default Apps;
