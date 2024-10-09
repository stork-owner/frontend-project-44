import readlineSync from 'readline-sync';
import replyToUser from './index.js';

console.log('Welcome to the Brain Games!');

export default () => {
  // спрашиваем имя игрока
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // условие игры
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  // функция поиска целого числа в заданном диапазоне
  function getRandomIntInclusive(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
  }

  // функция определения простого числа
  function isPrime(n) {
    let result = '';

    if (n < 2) {
      result = 'no';
      return result;
    }

    for (let i = 2; n > i; i += 1) {
      if (n % i === 0) {
        result = 'no';
        return result;
      }
    }
    result = 'yes';
    return result;
  }

  const firstNumber = getRandomIntInclusive(0, 100);

  console.log(`Question: ${firstNumber}`);
  const firstResponse = readlineSync.question('Your answer: ');

  if (replyToUser(firstResponse, isPrime(firstNumber)) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${firstResponse}' is wrong answer ;(. Correct answer was '${isPrime(firstNumber)}'.\nLet's try again, ${name}!`);
  }

  const secondNumber = getRandomIntInclusive(0, 100);

  console.log(`Question: ${secondNumber}`);
  const secondResponse = readlineSync.question('Your answer: ');

  if (replyToUser(secondResponse, isPrime(secondNumber)) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${secondResponse}' is wrong answer ;(. Correct answer was '${isPrime(secondNumber)}'.\nLet's try again, ${name}!`);
  }

  const thirdNumber = getRandomIntInclusive(0, 100);

  console.log(`Question: ${thirdNumber}`);
  const thirdResponse = readlineSync.question('Your answer: ');

  if (replyToUser(thirdResponse, isPrime(thirdNumber)) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${thirdResponse}' is wrong answer ;(. Correct answer was '${isPrime(thirdNumber)}'.\nLet's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};
