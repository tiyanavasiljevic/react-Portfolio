import React from 'react';
import './About.css'


const About = () => {
  const educationList = [
    'High school diploma: Typography',
    'Graduate from Marketing and Trade',
    'Google Digital Garage: The Fundamentals of Digital Marketing',
    'Cambridge University Press & Assessment: FCE'
  ];

  return (
    <div>
      {/* About Me Section */}
      <div className="irregular-shape">
        <h1 id="irregular">About Me</h1>
      </div>

      {/* Paragraph Section */}
      <div className="irregular-shape2">
        <p id="irregular2">
          Born and settled in Belgrade, always in love with its diversity.
          Graduated from the Graphic Media School, at Typography department.
          Currently in my final year of undergraduate studies at the
          Academy of Business and Art Studies in Belgrade, Department of Marketing and Trade.
          Since I was studying web design in my 3rd year, it was a good start for me to get into IT.
          A lover of theater and quality blues and electronic music, always in the mood for new journeys. 
          Deeply grateful to my curiosity that gives me the freedom to explore.
        </p>
      </div>

      {/* Education Section */}
      <div className="shape">
        <ul id="sh">
          <li>Education</li>
          {educationList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;