// Get random number in range [min; max). Max not included
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = (number) => number % 2 === 0;

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const number = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default generateQuestion;
