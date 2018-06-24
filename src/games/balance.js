import { cons } from 'hexlet-pairs';
import gameProcess from '..';
import generateNumber from '../utils';

const gameDescription = 'Balance the given number.';

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

const gameBalance = () => {
  const num1 = generateNumber(10, 100);
  const correctAnswer = balancedNumber(num1);
  const question = `${num1}`;
  const gameData = cons(question, correctAnswer.toString());
  return gameData;
};

export default () => gameProcess(gameBalance, gameDescription);
