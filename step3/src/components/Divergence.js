import React, { useState } from 'react';
import './Divergence.css';
import Toggle from './Toggle';
import Modal from './Modal';
import Absorb from './Absorb';

const plans = [
  { name: 'Workout', monthly: 'See fun activities to implement into your workouts', annual: 'See fun activities to implement into your workouts' },
  { name: 'Exercise', monthly: 'See some games that can help do essential exercises', annual: 'See some games that can help do essential exercises' },
  { name: 'Dieting', monthly: 'See what delicious meals you can make, while remaining healthy and fit', annual: 'See what delicious meals you can make, while remaining healthy and fit' },
];

const options = ['How to Lift', 'More divergence options here', 'More divergence options here'];

const Divergence = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleToggleOptions = (planName) => {
    setActivePlan(activePlan === planName ? null : planName);
  };

  const handleOpenModal = (option) => {
    if (option === 'How to Lift') {
      setModalContent(<Absorb />);
    } else {
      setModalContent(<div>Content for {option}</div>);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section id="divergence" className="divergence">
      <h2>Our Plans</h2>
      <Toggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <div className="pricing-cards">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.name}>
            <h3>{plan.name} Plan</h3>
            <p>{isAnnual ? plan.annual : plan.monthly}</p>
            <button onClick={() => handleToggleOptions(plan.name)}>Select</button>
            {activePlan === plan.name && (
              <div className="dropdown-options">
                {options.map((option, index) => (
                  <div key={index}>
                    <a href="#!" onClick={() => handleOpenModal(option)}>{option}</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </section>
  );
};

export default Divergence;
