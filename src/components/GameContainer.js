import React, { useEffect, useState } from 'react';

const rows = 3;
const cols = 3;

function GameContainer({ episode, goBackLevel, onSolve }) {
  const [pieces, setPieces] = useState([]);
  const [shuffledPieces, setShuffledPieces] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const episodeData = {
    1: { image: '/images/pegasi.webp' },
    2: { image: '/images/Proxima.jpg' },
    3: { image: '/images/kepler.PNG' },
    4: { image: '/images/trappist.webp' },
  };

  useEffect(() => {
    if (episode) {
      const episodeImage = episodeData[episode].image;
      const img = new Image();
      img.src = episodeImage;
      img.onload = () => {
        createPuzzlePieces(img);
      };
    }
  }, [episode]);

  const createPuzzlePieces = (img) => {
    const pieceWidth = img.width / cols;
    const pieceHeight = img.height / rows;

    const newPieces = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const canvas = document.createElement('canvas');
        canvas.width = pieceWidth;
        canvas.height = pieceHeight;
        const context = canvas.getContext('2d');
        context.drawImage(
          img,
          col * pieceWidth,
          row * pieceHeight,
          pieceWidth,
          pieceHeight,
          0,
          0,
          pieceWidth,
          pieceHeight
        );

        newPieces.push({
          canvas: canvas,
          originalPosition: row * cols + col,
          currentPosition: row * cols + col,
        });
      }
    }
    setPieces(newPieces);
    shufflePuzzle(newPieces);
  };

  const shufflePuzzle = (piecesArray) => {
    const shuffled = [...piecesArray].sort(() => Math.random() - 0.5);
    setShuffledPieces(shuffled);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrop = (droppedIndex) => {
    if (draggedIndex !== null) {
      const newShuffledPieces = [...shuffledPieces];
      [newShuffledPieces[draggedIndex], newShuffledPieces[droppedIndex]] = [
        newShuffledPieces[droppedIndex],
        newShuffledPieces[draggedIndex],
      ];
      setShuffledPieces(newShuffledPieces);
      checkIfSolved(newShuffledPieces);
      setDraggedIndex(null);
    }
  };

  const checkIfSolved = (piecesArray) => {
    const isSolved = piecesArray.every(
      (piece, index) => piece.originalPosition === index
    );
    if (isSolved) {
      onSolve();
    }
  };

  return (
    <div id="gameContainer">
      <button onClick={() => shufflePuzzle(pieces)}>Shuffle</button>
      <button onClick={goBackLevel}>Back to Levels</button>
      <div
        id="puzzleContainer"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 100px)`,
          gridTemplateRows: `repeat(${rows}, 100px)`,
          gap: '1px',
        }}
      >
        {shuffledPieces.map((piece, index) => (
          <div
            key={index}
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            draggable
            style={{
              width: '100px',
              height: '100px',
              border: '1px solid #ccc',
              backgroundImage: `url(${piece.canvas.toDataURL()})`,
              backgroundSize: 'cover',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default GameContainer;
