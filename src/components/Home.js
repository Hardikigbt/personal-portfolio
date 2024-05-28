// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Welcome to my personal portfolio website. Here you can learn more about me, see my projects, and discover the services I offer.</p>
      <p><strong>Mission Statement:</strong> Dedicated to delivering high-quality web and software solutions that drive success and innovation.</p>
      <button onClick={() => window.location.href='/about'}>Learn More About Me</button>
    </div>
  );
};

export default Home;
