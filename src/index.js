import readlineSync from 'readline-sync';

const numberOfAttempts = 3;

export const randomInteger = (min, max) => {
  const rand = Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));
  return rand;
};

export const isEven = value => (value % 2 === 0);

export const gameProcess = (funcName, gameRules) => {
  console.log('Welcome to Brain Games!');
  console.log(gameRules);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const result = funcName(userName);
    if (!result) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

