import React from 'react';
import LinkedInLogo from '../Images/LinkedInLogo.jpg';
import HireMe from '../Images/HireMe.jpg';

const ContactForm = [
  {
    title: "Click to LinkedIn",
    image: LinkedInLogo,
    url: 'https://www.linkedin.com/in/meixian-l-53a49943/',
  },
  {
    title: "Click to Resume",
    image: HireMe,
    url: 'https://docs.google.com/document/d/1s2-ZV6osSN29eSBuCJTPmt2bUsK9FZ0dhpKsg9HBkUk/edit?usp=sharing',
  },
];

const ContactInfo = () => {
  return (
    <div>
    <h1 className='ContactTitle flex flex-column text-2xl p-8 items-center justify-center w-full h-full'><strong>Welcome to Contact and Connect with Me</strong></h1>
    <div className='contactInfo-Container flex flex-row items-center justify-center'>
      {ContactForm.map((item, index) => (
        <div key={index} className="text-center m-8 text-xl text-blue">
          <h2>{item.title}</h2>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img
              src={item.image}
              alt={item.title}
              className="MePhoto max-h-60 cursor-pointer hover:shadow-lg hover:shadow-gray rounded p-4 transition-transform transform hover:scale-105"
            />
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ContactInfo;
