import getRandomNumber from '../random.js';

const getProgressionStart = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const progressionStart = getRandomNumber(minNumber, maxNumber + 1);
  return progressionStart;
};

const getProgressionStep = () => {
  const minNumber = 1;
  const maxNumber = 5;
  const progressionStep = getRandomNumber(minNumber, maxNumber + 1);
  return progressionStep;
};

const generateQuestion = () => {
  const progressionLength = 10;
  const progressionStart = getProgressionStart();
  const missingElementPosition = getRandomNumber(0, progressionLength);
  const progression = [];
  let progressionElement = progressionStart;
  const progressionStep = getProgressionStep();
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(`${progressionElement}`);
    progressionElement += progressionStep;
  }
  const correctAnswer = progression[missingElementPosition];
  progression[missingElementPosition] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default generateQuestion;
