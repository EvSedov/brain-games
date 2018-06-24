// common game functions module

// generates a random number in the specified interval
export const generateNumber = (min, max) => {
  const rand = Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));
  return rand;
};


// the predicate function returns true if the number is even
export const isEven = value => (value % 2 === 0);


// calculates the greatest common divisor
export const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while ((a !== 0) && (b !== 0)) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return (a + b);
};


// calculates a balanced number
export const balancedNumber = (value) => {
  const arrOfNumber = value.toString().split('').map(item => Number(item));
  const lenArrOfNumber = arrOfNumber.length;
  const sumArrOfNumber = arrOfNumber.reduce((sum, item) => sum + item, 0);
  const iter = (acc, sum, len) => {
    if (len === 0) {
      return Number(acc.join(''));
    }
    return iter([...acc, Math.floor(sum / len)], sum - Math.floor(sum / len), len - 1);
  };
  return iter([], sumArrOfNumber, lenArrOfNumber);
};
