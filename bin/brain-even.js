#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuestion from '../src/games/even.js';

const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(startMessage, generateQuestion);
