// game module calculates the greatest common divisor

import { cons } from 'hexlet-pairs';
import gameProcess from '..';
import { generateNumber, gcd } from '../utils';

const minNum = 1;
const maxNum = 100;
const gameDescription = 'Find the greatest common divisor of given numbers.';

export const gameGcd = () => {
  const num1 = generateNumber(minNum, maxNum);
  const num2 = generateNumber(minNum, maxNum);
  const correctAnswer = gcd(num1, num2);
  const question = `${num1}   ${num2}`;
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export const play = () => gameProcess(gameGcd, gameDescription);
