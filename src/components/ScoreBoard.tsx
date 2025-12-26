import React from 'react';

interface ScoreBoardProps {
  playerScore: number;
  computerScore: number;
  ties: number;
  onReset: () => void;
}

export function ScoreBoard({ playerScore, computerScore, ties, onReset }: ScoreBoardProps) {
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-6 mb-6">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-gray-600 mb-1">Player</div>
          <div className="text-blue-600">{playerScore}</div>
        </div>
        <div className="text-center">
          <div className="text-gray-600 mb-1">Ties</div>
          <div className="text-gray-600">{ties}</div>
        </div>
        <div className="text-center">
          <div className="text-gray-600 mb-1">Computer</div>
          <div className="text-red-600">{computerScore}</div>
        </div>
      </div>
      <button
        onClick={onReset}
        className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
      >
        Reset Score
      </button>
    </div>
  );
}
