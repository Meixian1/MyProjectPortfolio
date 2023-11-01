import React, { useState } from 'react';
import IngreMagicCalculator from '../Images/IngreMagicCalculator.png';
import EmoRelease from '../Images/EmoRelease.png';
import HireMe from '../Images/HireMe.jpg';
import ConflictManagement from '../Images/ConflictManagement.jpg';
import haveFun from '../Images/haveFun.jpg';
import IngreClickMe from '../Images/IngreClickMe.jpg';
import EmoClickMe from '../Images/EmoClickMe.jpg';

const ProjectDemo = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [highlighted, setHighlighted] = useState(null);

  const projects = [
    {
      name: 'IngreMagic App',
      content: 'IngreMagic streamlines complex cosmetic formulation processes, enhancing precision and efficiency for professionals in labs, product developers, and DIY enthusiasts. This valuable tool simplifies formula calculations, reducing errors, and saving time.',
    },
    {
      name: 'EmoRelease App',
      content: 'The EmoRelease App is designed for assisting individuals in releasing and transforming their emotions and mindsets from negative to positive states. Users can effectively manage and enhance their emotional well-being, paving the way for a more positive and fulfilling life.',
    },

  ];

  const projectLinks = [
    {
      title: "Click to App",
      image: IngreClickMe,
      url: 'https://meixian1.github.io/IngreMagic-Formulation-Calculator-/',
    },
    {
      title: 'Click to App',
      image: EmoClickMe,
      url: 'https://emorelease-app.onrender.com/',
    } // Close the object here
  ]; // Close the array here

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    setHighlighted(index);
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-5">
        <div className="projectMenu text-xl items-center text-center justify-center mt-4 p-5"><strong>Project Menu</strong></div>
        <ul className="flex flex-col items-center justify-center text-center">
          {projects.map((project, index) => (
            <li key={index} className="my-2">
              <button
                onClick={() => handleProjectClick(project, index)}
                className={`bg-blue-500 text-white py-2 px-4 rounded ${
                  highlighted === index ? 'bg-orange-500' : 'bg-blue-500'
                }`}
              >
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4 relative">
        <h1 className="text-2xl text-center p-4"><strong>Project Demonstration</strong></h1>
        <div className='topLabel flex items-center justify-center'>
          {selectedProject === null ? (
            <img src={haveFun} alt="haveFun" style={{ objectFit: 'cover', width: '45%', height: '45%' }} />
          ) : null}
        </div>
        <div>
          {selectedProject && (
            <div className='Demo-Content text-xl'>{selectedProject.content}</div>
          )}
        </div>

        <div className='appIcons flex items-center justify-center'>
        {selectedProject && selectedProject.name === 'IngreMagic App' && (
          <div>
            {/* <h2>{projectLinks[0].title}</h2> */}
            <a href={projectLinks[0].url} target="_blank" rel="noopener noreferrer">
              <img
                src={projectLinks[0].image}
                alt={projectLinks[0].title}
                className="iconPhoto max-h-60 cursor-pointer hover:shadow-lg hover:shadow-gray rounded p-4 transition-transform transform hover:scale-105"
              />
            </a>
          </div>
        )}

        {selectedProject && selectedProject.name === 'EmoRelease App' && (
          <div>
            {/* <h2>{projectLinks[1].title}</h2> */}
            <a href={projectLinks[1].url} target="_blank" rel="noopener noreferrer">
              <img
                src={projectLinks[1].image}
                alt={projectLinks[1].title}
                className="iconPhoto max-h-60 cursor-pointer hover:shadow-lg hover:shadow-gray rounded p-4 transition-transform transform hover:scale-105"
              />
            </a>
          </div>
       ) }

      </div>
      </div>
    </div>
  );

};

export default ProjectDemo;
