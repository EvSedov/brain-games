import readlineSync from 'readline-sync';
import { randomInteger } from '..';

const minNum = 1;
const maxNum = 10;
export const gameRules = 'What is the result of the expression?\n';
const setOfArithmeticSigns = ['+', '-', '*'];

export const gameCalc = (userName) => {
  const num1 = randomInteger(minNum, maxNum);
  const num2 = randomInteger(minNum, maxNum);
  const index = Math.floor(Math.random() * 3);
  const arithmeticSigns = setOfArithmeticSigns[index];
  const correctAnswer = () => {
    switch (arithmeticSigns) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };
  const correct = correctAnswer();
  const question = `${num1} ${arithmeticSigns} ${num2}`;
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (Number(userAnswer) !== correct) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.
Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};
