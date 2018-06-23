import { cons } from 'hexlet-pairs';
import { randomInteger, gameProcess } from '..';

const minNum = 1;
const maxNum = 10;
export const gameDescription = 'What is the result of the expression?\n';
const setOfArithmeticSigns = ['+', '-', '*'];

export const gameCalc = () => {
  const num1 = randomInteger(minNum, maxNum);
  const num2 = randomInteger(minNum, maxNum);
  const index = Math.floor(Math.random() * 3);
  const arithmeticSigns = setOfArithmeticSigns[index];
  const getCorrectAnswer = () => {
    switch (arithmeticSigns) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };
  const correctAnswer = getCorrectAnswer();
  const question = `${num1} ${arithmeticSigns} ${num2}`;
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export const play = () => gameProcess(gameCalc, gameDescription);
