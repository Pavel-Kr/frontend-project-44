import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(3, 100);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const runPrime = () => {
  const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(startMessage, generateRound);
};

export default runPrime;
