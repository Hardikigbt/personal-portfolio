// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Manual Testing',
      description: 'Functional, regression, usability, and exploratory testing to ensure your software works as intended.',
      imageUrl: '/Mannual.jpg'
    },
    {
      title: 'Automated Testing',
      description: 'Automating repetitive tasks and integrating tests into CI/CD pipelines to improve efficiency and reliability.',
      imageUrl: '/Automation.jpg'
    },
    {
      title: 'Performance Testing',
      description: 'Assessing the software’s performance under load and extreme conditions to ensure scalability and robustness.',
      imageUrl: '/performance.jpg'
    },
    {
      title: 'Security Testing',
      description: 'Identifying and fixing vulnerabilities to ensure your software meets industry and regulatory security standards.',
      imageUrl: '/security.jpg'
    },
    {
      title: 'Mobile App Testing',
      description: 'Ensuring compatibility, performance, and usability of your mobile apps across different devices and platforms.',
      imageUrl: '/mobile app.jpg'
    },
    {
      title: 'API Testing',
      description: 'Testing APIs for functionality, performance, and security to ensure reliable and secure integrations.',
      imageUrl: '/API.jpg'
    },
    {
      title: 'Test Management',
      description: 'Creating test plans, designing test cases, managing test execution, and providing detailed reporting.',
      imageUrl: '/test.jpg'
    },
    {
      title: 'Consulting and Training',
      description: 'Providing expert advice on testing strategies and tools, and offering training sessions on best practices and methodologies.',
      imageUrl: '/consult.jpg'
    },
  ];

  return (
    <div className="services">
      {servicesList.map((service, index) => (
        <div key={index} className="service">
          <img src={service.imageUrl} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
