// game module even number
import { cons } from 'hexlet-pairs';
import { gameProcess, numberOfAttempts } from '..';
import generateNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = value => (value % 2 === 0);

const gameEvenNumber = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => gameProcess(gameEvenNumber, gameDescription, numberOfAttempts);
