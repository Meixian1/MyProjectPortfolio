import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css'
import NavBar from './component/NavBar'
import Home from './component/Home'
import ProjectDemo from './component/ProjectDemo'
import ContactInfo from './component/Contact'

const App = () => {

  return (
    <div className='NavBar-container items-center justify-center centent-center'>
    <Router>
    <NavBar/>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path="/project-demo" element={<ProjectDemo/>} />
      <Route path="/contact" element={<ContactInfo/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App; 