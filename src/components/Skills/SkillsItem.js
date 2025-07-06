import React from 'react';

function SkillsItem({ title, icon, modalKey, onSkillClick }) {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12"
      onClick={modalKey ? () => onSkillClick(modalKey) : null} // Chỉ thêm onClick nếu có modalKey
    >
      <div className="skill-item">
        <p className="skill-title">{title}</p>
        <i className={`${icon} skill-icon`}></i>
      </div>
    </div>
  );
}

export default SkillsItem;