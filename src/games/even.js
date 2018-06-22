import readlineSync from 'readline-sync';
import { randomInteger, isEven } from '..';

const minNum = 1;
const maxNum = 100;
export const gameRules = 'Answer "yes" if number even otherwise answer "no".\n';

export const gameEvenNumber = (userName) => {
  const question = randomInteger(minNum, maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};
