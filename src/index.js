import readlineSync from 'readline-sync';

export const greetingUser = () => {
  console.log('Welcome to Brain Games!');
};

const getRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * 100);
  if (randomNum === 0) {
    return randomNum + Math.floor(Math.random() * 100);
  }
  return randomNum;
};

export const gameEvenNumber = () => {
  const numberOfAttempts = 3;
  greetingUser();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?: ');
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const question = getRandomNumber();
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
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
