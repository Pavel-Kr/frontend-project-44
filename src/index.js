import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (startMessage, generateQuestion) => {
  const roundsCount = 3;
  const name = greetUser();
  console.log(startMessage);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
