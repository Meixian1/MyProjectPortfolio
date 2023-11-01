import React, { useState } from 'react';
import './style.css'; // Import the CSS file
import ProPhoto from '../Images/ProPhoto.jpg'; // Import the image
import SoftwareEngineering1 from '../Images/SoftwareEngineering1.jpg';
import FaceMask from '../Images/FaceMask.jpg';
import SeattlePublicLibrary from '../Images/SeattlePublicLibrary.jpg';
import SDLC from '../Images/SDLC.png';
import versatileConnect from '../Images/versatileConnect.jpg';

const availableColors = [
  { bgClass: 'bg-pink-300' },
  { bgClass: 'bg-teal-300'},
  { bgClass: 'bg-red-300' },
  { bgClass: 'bg-blue-300' },
  { bgClass: 'bg-green-300' },
  { bgClass: 'bg-yellow-200' },
  { bgClass: 'bg-purple-300' },
];
const textColorAvailable = [
  { textClass: 'text-black-500', symbol: '💡' },
  { textClass: 'text-orange-500', symbol: '💡' },
  { textClass: 'text-blue-500', symbol: '💡' },
  { textClass: 'text-green-500', symbol: '💡' },
  { textClass: 'text-yellow-500', symbol: '💡' },
  { textClass: 'text-purple-500', symbol: '💡' },
];

const pages = [
  {
    title: "Hello, I'm Meixian L.",
    image: ProPhoto,
    content: "I'm on a journey to become a skilled software engineer, specializing in crafting dynamic websites and innovative software applications. My unique background blends creativity with technical expertise.",
  },
  {
    title: "A Creative Cosmetic Chemist/Formulator:",
    image: FaceMask,
    content: "With a three-year career in product development, I've excelled in crafting skincare solutions in the personal care sector. I've successfully launched products that have graced both physical and online shelves, gaining a deep understanding of market dynamics.",
  },
  {
    title: "An Aspiring Designer and Developer:",
    image: SoftwareEngineering1,
    content: "My passion for design and development led me to embark on a transformative path. Currently, I'm immersed in a rigorous 15-week software engineering boot camp. This experience has honed my ability to program and construct dynamic websites and software applications, setting the stage for my journey ahead.",
  },
  {
    title: "A Problem Solver in the Making:",
    image: versatileConnect,
    content: "My unique blend of design, development, and software engineering, coupled with a proven track record of delivering products to market, positions me as a versatile problem solver. I'm eager to leverage these strengths to drive innovative solutions for your challenges.",
  },
  {
    title: "Technology for Website & WebApp Development",
    image: SDLC,
    content: "HTML | CSS: Tailwind CSS | JavaScript | SQL | Python 3 | R | Git/GitBash | GitHub | VS Code | Vue.js | MERN: MongoDB, Express, React, Node",
    // customStyle: {
    //   image: {
    //     width: '70%',
    //     height: '60%',
    //   },
    // },
  },
  {
    title: "Congratulations!",
    image: SeattlePublicLibrary,
    content: "Let's create and innovate together!",
  },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);
  const [selectedTextColor, setSelectedTextColor] = useState(textColorAvailable[0]);

  const flipPage = (direction) => {
    if (direction === 'next') {
      setCurrentPage((prevPage) => (prevPage === pages.length - 1 ? 0 : prevPage + 1));
    } else if (direction === 'prev') {
      setCurrentPage((prevPage) => (prevPage === 0 ? pages.length - 1 : prevPage - 1));
    }
  };

  const changeBackgroundColor = (color) => {
    setSelectedColor(color);
  };

  const changeTextColor = (color) => {
    setSelectedTextColor(color);
  };

  return (
    <div className={`home-container flex flex-col items-center justify-center ${selectedColor.bgClass} p-10 mx-6`}>
      <div className="text-2xl">
        <p>
          Welcome to my portfolio, where you'll find a collection of my work and my journey in software engineering.
        </p>
      </div>
      <div className="book-container flex flex-column">
        <div className="color-toolbar flex flex-col items-center w-12 h-full">
          <p className="flex items-center text-center justify-center mb-2 text-white"><strong>Change Background Color:</strong></p>
          {availableColors.map((color, index) => (
            <button
              key={index}
              className={`color-button h-6 w-6 rounded-full cursor-pointer ${color.bgClass} ${
                color === selectedColor ? 'border-2 border-gray-700' : ''
              }`}
              onClick={() => changeBackgroundColor(color)}
            ></button>
          ))}
          <p className="flex items-center text-center justify-center mt-4 text-white"><strong>Change Text Color:</strong></p>
          {textColorAvailable.map((color, index) => (
            <button
              key={index}
              className={`text-color-button h-6 w-6 rounded-full cursor-pointer ${color.textClass} ${
                color === selectedTextColor ? 'border-2 border-gray-700' : ''
              }`}
              onClick={() => changeTextColor(color)}
            >
              {color.symbol}
            </button>
          ))}
        </div>
        <div className="flex book ml-4 p-4">
          {pages.map((page, index) => (
            <div key={index} className={`page ${currentPage === index ? 'current' : 'flipped'}`}>
              <div className={`page-content ${selectedTextColor.textClass}`}>
                <div className={`page-header text-uppercase text-center ${selectedTextColor.textClass}`}>{page.title}</div>
                <div className="page-image bg-cover bg-center bg-no-repeat" style={{ width: '100%', height: '52%' }}>
                  <img src={page.image} alt={page.title} style={{ objectFit: 'cover', width: '85%', height: '100%' }}/>
                </div>

                <div className={`page-text text-justify mt-10 pt-10 border-t border-solid border-gray-300 ${selectedTextColor.textClass}`}>
                  {page.content}
                </div>
                <div className="page-footer text-sm text-gray-600">Footer Content</div>
                <div className={`page-number text-sm ${selectedTextColor.textClass}`}>Page {index + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button-container flex items-center justify-center mt-4">
        <button
          onClick={() => flipPage('prev')}
          className="bg-blue-400 text-white p-2 rounded-md mr-2"
        >
          Previous Page
        </button>
        <button
          onClick={() => flipPage('next')}
          className="bg-blue-400 text-white p-2 rounded-md mr-2"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Home;
