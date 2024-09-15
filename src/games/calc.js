import getRandomNumber from '../random.js';

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const operators = ['+', '-', '*'];
  const leftOp = getRandomNumber(minNumber, maxNumber);
  const rightOp = getRandomNumber(minNumber, maxNumber);
  const operator = operators[getRandomNumber(0, 3)];
  const question = `${leftOp} ${operator} ${rightOp}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = leftOp + rightOp;
      break;
    case '-':
      correctAnswer = leftOp - rightOp;
      break;
    case '*':
      correctAnswer = leftOp * rightOp;
      break;
    default:
      console.log(`Invalid operator: '${operator}'`);
      break;
  }
  correctAnswer = String(correctAnswer);
  return [question, correctAnswer];
};

export default generateQuestion;
