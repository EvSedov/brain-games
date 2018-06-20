import readlineSync from 'readline-sync';

export const greetingUser = () => {
  console.log('Welcome to Brain Games!');
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name?: ');
  return userName;
};

const getRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * 100);
  if (!randomNum) {
    return getRandomNumber();
  }
  return randomNum;
};

export const gameEvenNumber = () => {
  let counter = 0;
  let answerUser;
  greetingUser();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const nameUser = getUserName();
  while (counter < 3) {
    const randomNum = getRandomNumber();
    const oddOdd = (randomNum % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`);
    answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== oddOdd) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${oddOdd}'.
Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
    counter += 1;
  }
  console.log(`Congratulations, ${nameUser}!`);
};
