import readlineSync from 'readline-sync';
import replyToUser from './index.js';

console.log('Welcome to the Brain Games!');

export default () => {
  // спрашиваем имя игрока
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // условие игры
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // функция поиска целого числа в заданном диапазоне
  function getRandomIntInclusive(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
  }

  const firstNumber = getRandomIntInclusive(0, 100);
  const residueFirstNumber = firstNumber % 2;

  let parityFirstNumber = '';
  if (residueFirstNumber === 0) {
    parityFirstNumber = 'yes';
  } else {
    parityFirstNumber = 'no';
  }

  console.log(`Question: ${firstNumber}`);
  const firstResponse = readlineSync.question('Your answer: ');

  if (replyToUser(firstResponse, parityFirstNumber) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${firstResponse}' is wrong answer ;(. Correct answer was '${parityFirstNumber}'.\nLet's try again, ${name}!`);
  }

  const secondNumber = getRandomIntInclusive(0, 100);
  const residueSecondNumber = secondNumber % 2;

  if (residueSecondNumber === 0) {
    parityFirstNumber = 'yes';
  } else {
    parityFirstNumber = 'no';
  }

  console.log(`Question: ${secondNumber}`);
  const secondResponse = readlineSync.question('Your answer: ');

  if (replyToUser(secondResponse, parityFirstNumber) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${secondResponse}' is wrong answer ;(. Correct answer was '${parityFirstNumber}'.\nLet's try again, ${name}!`);
  }

  const thirdNumber = getRandomIntInclusive(0, 100);
  const residueThirdNumber = thirdNumber % 2;

  if (residueThirdNumber === 0) {
    parityFirstNumber = 'yes';
  } else {
    parityFirstNumber = 'no';
  }

  console.log(`Question: ${thirdNumber}`);
  const thirdResponse = readlineSync.question('Your answer: ');

  if (replyToUser(thirdResponse, parityFirstNumber) === true) {
    console.log('Correct!');
  } else {
    return console.log(`${thirdResponse} is wrong answer ;(. Correct answer was ${parityFirstNumber}.\nLet's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};
