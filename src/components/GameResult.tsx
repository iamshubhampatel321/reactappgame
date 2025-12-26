import React from 'react';

type Result = 'win' | 'lose' | 'tie';

interface GameResultProps {
  result: Result;
  onPlayAgain: () => void;
}

export function GameResult({ result, onPlayAgain }: GameResultProps) {
  const messages = {
    win: {
      text: 'You Win! 🎉',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    lose: {
      text: 'You Lose! 😢',
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    tie: {
      text: "It's a Tie! 🤝",
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    }
  };

  const { text, color, bg } = messages[result];

  return (
    <div className="text-center">
      <div className={`${bg} ${color} py-4 px-6 rounded-xl mb-6`}>
        <div className="mb-1">{text}</div>
      </div>
      <button
        onClick={onPlayAgain}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
      >
        Play Again
      </button>
    </div>
  );
}
