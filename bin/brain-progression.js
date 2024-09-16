#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuestion from '../src/games/progression.js';

const startMessage = 'What number is missing in the progression?';
runGame(startMessage, generateQuestion);
