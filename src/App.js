import React ,{useState}from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Image from './components/Image'
import Header from './components/Header'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Routes>
      <Route path="/Signup" element={<Signup />} />
     
     </Routes>
    </BrowserRouter>
    
    <Navbar />
    <Image />
    <Header />
    <Testimonial />
    <Footer />
    
   
    
    </div>
  );
}


export default App;
