import getRandomNumber from '../random.js';

const isPrime = (number) => {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23,
    29, 31, 37, 41, 43, 47, 53, 59,
    61, 67, 71, 73, 79, 83, 89, 97,
  ];
  return primeNumbers.includes(number);
};

const generateQuestion = () => {
  const minNumber = 3;
  const maxNumber = 100;
  const number = getRandomNumber(minNumber, maxNumber);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default generateQuestion;
