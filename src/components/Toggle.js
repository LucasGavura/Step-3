import React from 'react';
import './Toggle.css';

const Toggle = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="toggle-switch">
      <label>
        {isAnnual ? 'Annual Plans' : 'Monthly Plans'}
        <input
          type="checkbox"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
