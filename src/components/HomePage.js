import React from 'react';

function HomePage({ startGame }) {
  return (
    <div id="homePage">
      <h1>Welcome to the Exoplanets Puzzle Game</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default HomePage;
