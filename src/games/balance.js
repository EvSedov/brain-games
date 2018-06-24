// game module balance number

import { cons } from 'hexlet-pairs';
import gameProcess from '..';
import { generateNumber, balancedNumber } from '../utils';

const minNum = 10;
const maxNum = 100;
const gameDescription = 'Balance the given number.';

export const gameBalance = () => {
  const num1 = generateNumber(minNum, maxNum);
  const correctAnswer = balancedNumber(num1);
  const question = `${num1}`;
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export const play = () => gameProcess(gameBalance, gameDescription);
