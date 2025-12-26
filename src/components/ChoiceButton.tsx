import React from 'react';

type Choice = 'rock' | 'paper' | 'scissors';

interface ChoiceButtonProps {
  choice: Choice;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
}

export function ChoiceButton({ choice, onClick, disabled, selected }: ChoiceButtonProps) {
  const emojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
  };

  const labels = {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex flex-col items-center justify-center
        p-6 rounded-xl transition-all
        ${selected 
          ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white scale-105' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }
        ${disabled && !selected ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
        ${!disabled && !selected ? 'shadow-lg hover:shadow-xl' : ''}
      `}
    >
      <div className="text-5xl mb-2">{emojis[choice]}</div>
      <div className={selected ? 'text-white' : 'text-gray-700'}>{labels[choice]}</div>
    </button>
  );
}
