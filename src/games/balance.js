import { cons } from 'hexlet-pairs';
import { gameProcess, randomInteger } from '..';

const minNum = 10;
const maxNum = 100;
export const gameDescription = 'Balance the given number.\n';

const balancedNumber = (value) => {
  const arrOfNumber = value.toString().split('').map(item => Number(item));
  const lenArrOfNumber = arrOfNumber.length;
  const sumArrOfNumber = arrOfNumber.reduce((sum, item) => sum + item, 0);
  const iter = (acc, sum, len) => {
    if (len === 0) {
      return Number(acc.join(''));
    }
    return iter([...acc, Math.floor(sum / len)], sum - Math.floor(sum / len), len - 1);
  };
  return iter([], sumArrOfNumber, lenArrOfNumber);
};

export const gameBalance = () => {
  const num1 = randomInteger(minNum, maxNum);
  const correctAnswer = balancedNumber(num1);
  const question = `${num1}`;
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export const play = () => gameProcess(gameBalance, gameDescription);
