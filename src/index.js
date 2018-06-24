// gameplay module
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const numberOfAttempts = 3;

export const gameProcess = (funcName, gameDescription, numberOfRepetitions) => {
  console.log('Welcome to Brain Games!');
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < numberOfRepetitions; i += 1) {
    const gameData = funcName();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
  Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
