import readlineSync from 'readline-sync';
import { greetingUser, randomInteger, isEven, numberOfAttempts } from '..';

const minNum = 1;
const maxNum = 100;

const gameEvenNumber = () => {
  greetingUser();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name?: ');
  for (let i = 0; i < numberOfAttempts; i += 1) {
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
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default gameEvenNumber;
