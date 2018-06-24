import { cons } from 'hexlet-pairs';
import gameProcess from '..';
import generateNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while ((a !== 0) && (b !== 0)) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return (a + b);
};

const gameGcd = () => {
  const num1 = generateNumber(1, 100);
  const num2 = generateNumber(1, 100);
  const correctAnswer = gcd(num1, num2);
  const question = `${num1}   ${num2}`;
  const gameData = cons(question, correctAnswer.toString());
  return gameData;
};

export default () => gameProcess(gameGcd, gameDescription);
