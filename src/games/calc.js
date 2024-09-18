import getRandomNumber from '../random.js';
import runGame from '../index.js';

const calculateExpression = (number1, operator, number2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      console.log(`Invalid operator: '${operator}'`);
      result = null;
      break;
  }
  return result;
};

const generateQuestion = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const result = calculateExpression(number1, operator, number2);
  const answer = String(result);
  return [question, answer];
};

const runCalc = () => {
  const startMessage = 'What is the result of the expression?';
  runGame(startMessage, generateQuestion);
};

export default runCalc;
