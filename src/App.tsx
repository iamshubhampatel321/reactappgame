import React, { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { ScoreBoard } from './components/ScoreBoard';

export default function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [ties, setTies] = useState(0);

  const handleGameResult = (result: 'win' | 'lose' | 'tie') => {
    if (result === 'win') {
      setPlayerScore(prev => prev + 1);
    } else if (result === 'lose') {
      setComputerScore(prev => prev + 1);
    } else {
      setTies(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setTies(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-white mb-2">Rock Paper Scissors</h1>
          <p className="text-white/90">Choose your weapon!</p>
        </div>

        <ScoreBoard 
          playerScore={playerScore}
          computerScore={computerScore}
          ties={ties}
          onReset={handleReset}
        />

        <GameBoard onGameResult={handleGameResult} />
      </div>
    </div>
  );
}
