import React from 'react'
import { useState } from 'react';

const Skills = () => {
     const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);

  const addSkill = () => {
    setSkills((prev) => [...prev, "React"]);
  };



  return (
    <>
    <div className='bg-cyan-100 h-50 w-40  align-items:centre flex  flex-col items-center justify-center'>
      <h2>Skills List</h2>
      

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button className='bg-black text-white' onClick={addSkill}>Add Skill</button>
    </div>
    
    </>
  )
}

export default Skills
