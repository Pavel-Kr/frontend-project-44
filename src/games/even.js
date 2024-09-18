import getRandomNumber from '../random.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateQuestion = () => {
  const number = getRandomNumber(1, 20);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const runEven = () => {
  const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(startMessage, generateQuestion);
};

export default runEven;
