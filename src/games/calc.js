// game module calculator
import { cons } from 'hexlet-pairs';
import { gameProcess, numberOfAttempts } from '..';
import generateNumber from '../utils';

const gameDescription = 'What is the result of the expression?';

const gameCalc = () => {
  const num1 = generateNumber(1, 10);
  const num2 = generateNumber(1, 10);
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
  const gameData = cons(question, correctAnswer.toString());
  return gameData;
};

export default () => gameProcess(gameCalc, gameDescription, numberOfAttempts);
