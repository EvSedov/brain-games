// game module calculator
import { cons } from 'hexlet-pairs';
import gameProcess from '..';
import { generateNumber } from '../utils';

const minNum = 1;
const maxNum = 10;
const gameDescription = 'What is the result of the expression?';

const gameCalc = () => {
  const num1 = generateNumber(minNum, maxNum);
  const num2 = generateNumber(minNum, maxNum);
  const num3 = generateNumber(0, 2);
  let correctAnswer = 0;
  let arithmeticSigns = '';
  switch (num3) {
    case '0':
      correctAnswer = num1 + num2;
      arithmeticSigns = '+';
      break;
    case 1:
      correctAnswer = num1 - num2;
      arithmeticSigns = '-';
      break;
    default:
      correctAnswer = num1 * num2;
      arithmeticSigns = '*';
  }
  const question = `${num1} ${arithmeticSigns} ${num2}`;
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => gameProcess(gameCalc, gameDescription);
