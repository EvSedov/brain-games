// game module even number
import { cons } from 'hexlet-pairs';
import gameProcess from '..';
import { generateNumber, isEven } from '../utils';

const minNum = 1;
const maxNum = 100;
const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export const gameEvenNumber = () => {
  const question = generateNumber(minNum, maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export const play = () => gameProcess(gameEvenNumber, gameDescription);
