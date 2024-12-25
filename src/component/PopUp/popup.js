import React, { useState } from 'react';
import './popup.css';

const Popup = ({ title, message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>{title}</h2>
        <p>{message}</p>
        <button className="popup-close-btn" onClick={onClose}>
          Agree
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="app">
      <button className="open-popup-btn" onClick={handleOpenPopup}>
        Open Popup
      </button>
      {isPopupVisible && (
        <Popup
          title="Welcome!"
          message="This is a customizable popup for your React website."
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Popup;
