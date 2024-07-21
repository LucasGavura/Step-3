import React, { useState } from 'react';
import './Organize.css';

const Organize = () => {
  const [goal, setGoal] = useState('');
  const [submittedGoals, setSubmittedGoals] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim() !== '') {
      setSubmittedGoals([...submittedGoals, goal]);
      setGoal('');
    }
  };

  return (
    <section id="organize" className="organize">
      <h2>Goal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your goal"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="goal-list">
        {submittedGoals.map((g, index) => (
          <div key={index} className="goal-item">
            {g}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organize;