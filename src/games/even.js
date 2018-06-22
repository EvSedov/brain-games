import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import { randomInteger } from '..';

const minNum = 1;
const maxNum = 100;
export const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';

export const isEven = value => (value % 2 === 0);

export const gameEvenNumber = () => {
  const question = randomInteger(minNum, maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAndUserAnswer = cons(correctAnswer, userAnswer);
  return correctAndUserAnswer;
};
