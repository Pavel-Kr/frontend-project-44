#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

// Get random number in range [min; max). Max not included
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const numberOfRounds = 3;
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomNumber(minNumber, maxNumber);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
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

evenGame();
