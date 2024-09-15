#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuestion from '../src/games/calc.js';

const startMessage = 'What is the result of the expression?';
runGame(startMessage, generateQuestion);
