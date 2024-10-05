import React from 'react';

function SelectLevel({ startEpisode, goBack }) {
  return (
    <div id="selectLevel">
      <h1>Select an Episode</h1>
      {[1, 2, 3, 4].map((episode) => (
        <button key={episode} className="level-button" onClick={() => startEpisode(episode)}>
          Planet {episode}
        </button>
      ))}
      <button onClick={goBack}>Back to Home</button>
    </div>
  );
}

export default SelectLevel;
