import React, { useState } from 'react';
import { ChoiceButton } from './ChoiceButton';
import { GameResult } from './GameResult';

type Choice = 'rock' | 'paper' | 'scissors';
type Result = 'win' | 'lose' | 'tie' | null;

interface GameBoardProps {
  onGameResult: (result: 'win' | 'lose' | 'tie') => void;
}

export function GameBoard({ onGameResult }: GameBoardProps) {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<Result>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const choices: Choice[] = ['rock', 'paper', 'scissors'];

  const getComputerChoice = (): Choice => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (player === computer) return 'tie';
    
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'win';
    }
    
    return 'lose';
  };

  const handleChoice = (choice: Choice) => {
    if (isPlaying) return;

    setIsPlaying(true);
    setPlayerChoice(choice);
    setComputerChoice(null);
    setResult(null);

    // Simulate thinking time
    setTimeout(() => {
      const computerPick = getComputerChoice();
      setComputerChoice(computerPick);

      const gameResult = determineWinner(choice, computerPick);
      setResult(gameResult);
      onGameResult(gameResult);
      
      setIsPlaying(false);
    }, 1000);
  };

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8">
      {!playerChoice ? (
        <div>
          <h2 className="text-center text-gray-700 mb-6">Make your choice</h2>
          <div className="grid grid-cols-3 gap-4">
            {choices.map((choice) => (
              <ChoiceButton
                key={choice}
                choice={choice}
                onClick={() => handleChoice(choice)}
                disabled={isPlaying}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-gray-600 mb-4">You chose</h3>
              <ChoiceButton
                choice={playerChoice}
                disabled
                selected
              />
            </div>
            <div className="text-center">
              <h3 className="text-gray-600 mb-4">Computer chose</h3>
              {computerChoice ? (
                <ChoiceButton
                  choice={computerChoice}
                  disabled
                  selected
                />
              ) : (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-pulse text-gray-400">Thinking...</div>
                </div>
              )}
            </div>
          </div>

          {result && (
            <GameResult result={result} onPlayAgain={handlePlayAgain} />
          )}
        </div>
      )}
    </div>
  );
}
