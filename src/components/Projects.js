// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <section className="project">
        <img src="/jobs-in-education-logo.png" alt="Project 1" />
        <h2><a href="https://jobsineducation.com/">Jobs in Education</a></h2>
        <p>Jobs in Education is one of the Ontario Government approve website through which School boards in Ontario (employers) 
          often recruit teachers and teachers (applicants) apply for the jobs  (https://jobsineducation.com/).</p>
      </section>
      <section className="project">
        <img src="/KT.jpg" alt="Project 2" />
        <h2><a href="https://www.kensingtontours.com/"> Online Web Portal</a></h2>
        <p>Kensington tours web portal – Where customers can book their Hotel, travel, different attractions tickets and air tickets.</p>
      </section>
     
    </div>
  );
};

export default Projects;
