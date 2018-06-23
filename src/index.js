import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfAttempts = 3;

export const randomInteger = (min, max) => {
  const rand = Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));
  return rand;
};

export const gameProcess = (funcName, gameDescription) => {
  console.log('Welcome to Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const gameData = funcName();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const newUserAnswer = (parseInt(userAnswer, 10)) ? Number(userAnswer) : userAnswer;
    if (newUserAnswer !== correctAnswer) {
      console.log(`'${newUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
  Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
