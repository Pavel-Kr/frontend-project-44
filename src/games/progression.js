import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const progressionElement = start + i * step;
    progression.push(`${progressionElement}`);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = 10;
  const progressionStart = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 5);
  const progression = generateProgression(progressionStart, progressionStep, progressionLength);
  const missingElementPosition = getRandomNumber(0, progression.length - 1);
  const answer = progression[missingElementPosition];
  progression[missingElementPosition] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runProgression = () => {
  const startMessage = 'What number is missing in the progression?';
  runGame(startMessage, generateRound);
};

export default runProgression;
