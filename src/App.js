import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import SelectLevel from './components/SelectLevel';
import GameContainer from './components/GameContainer';
import CongratsModal from './components/CongratsModal';
import InfoPage from './components/InfoPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [episode, setEpisode] = useState(null);
  const [isSolved, setIsSolved] = useState(false);

  const startGame = () => {
    setCurrentPage('selectLevel');
  };

  const startEpisode = (episodeNumber) => {
    setEpisode(episodeNumber);
    setCurrentPage('game');
  };

  const goBack = () => {
    setCurrentPage('home');
  };

  const goBackLevel = () => {
    setCurrentPage('selectLevel');
  };

  const handleSolve = () => {
    setIsSolved(true);
  };

  const closeModal = () => {
    setIsSolved(false);
    setCurrentPage('info');
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage startGame={startGame} />}
      {currentPage === 'selectLevel' && <SelectLevel startEpisode={startEpisode} goBack={goBack} />}
      {currentPage === 'game' && <GameContainer episode={episode} goBackLevel={goBackLevel} onSolve={handleSolve} />}
      {isSolved && <CongratsModal closeModal={closeModal} />}
      {currentPage === 'info' && <InfoPage episode={episode} goBackLevel={goBackLevel} />}
    </div>
  );
}

export default App;
