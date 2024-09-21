import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 20);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const runEven = () => {
  const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(startMessage, generateRound);
};

export default runEven;
