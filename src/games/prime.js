import { cons } from 'hexlet-pairs';
import gameProcess from '..';
import generateNumber from '../utils';

const gameDescription = 'Is this number prime?';

const isPrime = (value) => {
  const borderOfReference = 2;
  if (value === borderOfReference) {
    return true;
  } else if (value < borderOfReference || value % borderOfReference === 0) {
    return false;
  }
  const optimizedValue = Math.floor(Math.sqrt(value));
  for (let i = borderOfReference + 1; i <= optimizedValue; i += 2) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const gameData = cons(question, correctAnswer);
  return gameData;
};

export default () => gameProcess(gamePrime, gameDescription);
