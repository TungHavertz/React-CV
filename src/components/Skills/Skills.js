import React from 'react';
import '../../styles/animations.css';
import useFadeIn from '../../hooks/useFadeIn.js';
import './skills.css';
import SkillsItem from './SkillsItem.js';
import skillsData from './skillsData.js';

function Skills({ setModal }) { // Sửa cú pháp từ Skill{ setModal } thành Skill({ setModal })
  const fadeRef = useFadeIn({ threshold: 150 });

  const handleSkillClick = (skill) => {
    setModal(skill);
  };

  return (
    <div className="skill-wrap d-flex justify-content-center py-5">
      <div className="d-flex flex-column align-items-start">
        <h1>Certificates</h1>
        <div ref={fadeRef} className="fade-in row gy-4">
          {skillsData.map((skill, index) => (
            <SkillsItem
              key={index}
              title={skill.title}
              icon={skill.icon}
              modalKey={skill.modalKey}
              onSkillClick={handleSkillClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;