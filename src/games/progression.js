import getRandomNumber from '../random.js';
import runGame from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  let progressionElement = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(`${progressionElement}`);
    progressionElement += step;
  }
  return progression;
};

const generateQuestion = () => {
  const progressionLength = 10;
  const progressionStart = getRandomNumber(1, 20);
  const missingElementPosition = getRandomNumber(0, progressionLength - 1);
  const progressionStep = getRandomNumber(1, 5);
  const progression = generateProgression(progressionStart, progressionStep, progressionLength);
  const answer = progression[missingElementPosition];
  progression[missingElementPosition] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runProgression = () => {
  const startMessage = 'What number is missing in the progression?';
  runGame(startMessage, generateQuestion);
};

export default runProgression;
