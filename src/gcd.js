import readlineSync from 'readline-sync';
import replyToUser from './index.js';

console.log('Welcome to the Brain Games!');

export default () => {
  // спрашиваем имя игрока
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // условие игры
  console.log('Find the greatest common divisor of given numbers.');

  // функция поиска целого числа в заданном диапазоне
  function getRandomIntInclusive(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
  }

  // Функция поиска наибольшего общего делителя
  const greatestCommonDivisor = (n1, n2) => {
    const min = (n1 < n2) ? n1 : n2;
    const max = (n1 > n2) ? n1 : n2;
    let result = '';

    for (let i = min; i <= min && i > 0; i -= 1) {
      if (min % i === 0 && max % i === 0) {
        result = i;
        break;
      }
    }
    return result;
  };

  const firstNumberFirstQuestion = getRandomIntInclusive(1, 100);
  const secondNumberFirstQuestion = getRandomIntInclusive(1, 100);
  const greatestCommonDivisorFirstQuestion = greatestCommonDivisor(
    firstNumberFirstQuestion,
    secondNumberFirstQuestion,
  );

  console.log(`Question: ${firstNumberFirstQuestion} ${secondNumberFirstQuestion}`);
  const firstResponse = readlineSync.question('Your answer: ');

  if (replyToUser(Number(firstResponse), greatestCommonDivisorFirstQuestion) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${firstResponse}' is wrong answer ;(. Correct answer was '${greatestCommonDivisorFirstQuestion}'.\nLet's try again, ${name}!`);
  }

  const firstNumberSecondQuestion = getRandomIntInclusive(1, 100);
  const secondNumberSecondQuestion = getRandomIntInclusive(1, 100);
  const greatestCommonDivisorSecondQuestion = greatestCommonDivisor(
    firstNumberSecondQuestion,
    secondNumberSecondQuestion,
  );

  console.log(`Question: ${firstNumberSecondQuestion} ${secondNumberSecondQuestion}`);
  const SecondResponse = readlineSync.question('Your answer: ');

  if (replyToUser(Number(SecondResponse), greatestCommonDivisorSecondQuestion) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${SecondResponse}' is wrong answer ;(. Correct answer was '${greatestCommonDivisorSecondQuestion}'.\nLet's try again, ${name}!`);
  }

  const firstNumberThirdQuestion = getRandomIntInclusive(1, 100);
  const secondNumberThirdQuestion = getRandomIntInclusive(1, 100);
  const greatestCommonDivisorThirdQuestion = greatestCommonDivisor(
    firstNumberThirdQuestion,
    secondNumberThirdQuestion,
  );

  console.log(`Question: ${firstNumberThirdQuestion} ${secondNumberThirdQuestion}`);
  const ThirdResponse = readlineSync.question('Your answer: ');

  if (replyToUser(Number(ThirdResponse), greatestCommonDivisorThirdQuestion) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${ThirdResponse}' is wrong answer ;(. Correct answer was '${greatestCommonDivisorThirdQuestion}'.\nLet's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};
