// game module even number
import { cons } from 'hexlet-pairs';
import { gameProcess, numberOfAttempts } from '..';
import generateNumber from '../utils';

const gameDescription = 'What number is missing in this progression?';

const gameProgression = () => {
  const beginningOfProgression = generateNumber(1, 100);
  const progressionStep = generateNumber(1, 10);
  const randomIndex = generateNumber(0, 9);
  let progression = [beginningOfProgression];
  for (let i = 0; i < 9; i += 1) {
    progression = [...progression, progression[i] + progressionStep];
  }
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const gameData = cons(question, correctAnswer.toString());
  return gameData;
};

export default () => gameProcess(gameProgression, gameDescription, numberOfAttempts);
