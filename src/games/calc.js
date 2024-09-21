import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const calculateExpression = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      console.log(`Invalid operator: '${operator}'`);
      return null;
  }
};

const generateRound = () => {
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
  runGame(startMessage, generateRound);
};

export default runCalc;
