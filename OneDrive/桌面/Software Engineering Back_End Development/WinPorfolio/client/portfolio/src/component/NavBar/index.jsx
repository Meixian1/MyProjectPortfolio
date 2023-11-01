import React from 'react';
import {Link, Routes} from 'react-router-dom';
import './style.css'

const NavBar = () => {

  return (
<div>
 <nav className= "flex flex-row text-xl items-center justify-center justify-around p-4 bg-pink-300 ">
    <ul>
            <Link to="/"><strong>Home</strong></Link>
            <Link to="/project-demo"><strong>Project Demo</strong></Link>
            <Link to="/contact"><strong>Contact</strong></Link>
    </ul>
 </nav>
 </div>
  );
}

export default NavBar; 