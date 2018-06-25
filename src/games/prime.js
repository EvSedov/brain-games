import { cons } from 'hexlet-pairs';
import gameProcess from '..';
import generateNumber from '../utils';

const gameDescription = 'Is this number prime?';

const isPrime = (value) => {
  const borderOfReference = 2;
  if (value < borderOfReference) {
    return false;
  }
  for (let i = borderOfReference; i < value; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const question = generateNumber(1, 30);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => gameProcess(gamePrime, gameDescription);
