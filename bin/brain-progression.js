#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuestion from '../src/games/progression.js';

const startMessage = 'Find the greatest common divisor of given numbers.';
runGame(startMessage, generateQuestion);
