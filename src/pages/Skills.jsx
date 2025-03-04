import React from "react";


const Skills = () =>{
    const skills = [
        
            { name: 'HTML', percentage: 70 },
            { name: 'CSS', percentage: 60 },
            { name: 'Inkscape', percentage: 50 },
            { name: 'JS', percentage: 20 }
  ];
      
    
    return(
        <>
         <div className="grid-container">
        {skills.map((skill, index) => (
          <div key={index} className="grid-column">
            <h4>{skill.name}</h4>
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" stroke="#000" strokeWidth="0.5" fill="none" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                stroke="#000"
                strokeWidth="0.5px"
                dy=".3em"
              >
                {skill.percentage}%
              </text>
            </svg>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;