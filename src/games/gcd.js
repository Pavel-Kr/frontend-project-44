import getRandomNumber from '../random.js';

// Implementation of Euclidian algorithm
const gcd = (first, second) => {
  let a = first;
  let b = second;

  // A must contain bigger of two numbers. If A is less than B, swap them.
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
  // When remainder becomes zero, last non-zero remainder (which is GCD) is stored in b.
  return b;
};

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const firstNum = getRandomNumber(minNumber, maxNumber);
  const secondNum = getRandomNumber(minNumber, maxNumber);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = `${gcd(firstNum, secondNum)}`;
  return [question, correctAnswer];
};

export default generateQuestion;
