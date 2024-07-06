// src/App.js
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralForm from './components/ReferralForm';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <HeroSection onReferNowClick={handleReferNowClick} />
      <ReferralForm open={modalOpen} handleClose={handleClose} />
    </div>
  );
}

export default App;
