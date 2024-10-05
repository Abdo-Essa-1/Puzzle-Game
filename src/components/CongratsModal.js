import React from 'react';

function CongratsModal({ closeModal }) {
  return (
    <div id="congratsModal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <img src="/images/GreenCheck.png" alt="Green Checkmark" />
        <h3>Congratulations!</h3>
        <p>You've completed the Planet successfully.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default CongratsModal;
