import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import { randomInteger } from '..';

const minNum = 1;
const maxNum = 100;
export const gameDescription = 'Find the greatest common divisor of given numbers.\n';

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

export const gameGcd = () => {
  const num1 = randomInteger(minNum, maxNum);
  const num2 = randomInteger(minNum, maxNum);
  const correctAnswer = gcd(num1, num2);
  console.log(`Question: ${num1}   ${num2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAndUserAnswer = cons(correctAnswer, userAnswer);
  return correctAndUserAnswer;
};
