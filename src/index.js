export const numberOfAttempts = 3;

export const greetingUser = () => {
  console.log('Welcome to Brain Games!');
};

export const randomInteger = (min, max) => {
  const rand = Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));
  return rand;
};

export const isEven = value => (value % 2 === 0);
