import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gcd = (first, second) => {
  let a = first;
  let b = second;

  if (a < b) {
    const tmp = a;
    a = b;
    b = tmp;
  }

  let remainder = a % b;
  while (remainder > 0) {
    a = b;
    b = remainder;
    remainder = a % b;
  }
  return b;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = `${gcd(number1, number2)}`;
  return [question, answer];
};

const runGcd = () => {
  const startMessage = 'Find the greatest common divisor of given numbers.';
  runGame(startMessage, generateRound);
};

export default runGcd;
