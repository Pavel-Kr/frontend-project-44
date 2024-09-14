#!/usr/bin/env node
import getName from '../src/cli.js';

const main = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
};

main();
