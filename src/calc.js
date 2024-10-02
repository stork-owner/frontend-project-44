import readlineSync from 'readline-sync';
import { replyToUser } from './index.js';

console.log('Welcome to the Brain Games!');

export default () => {
  // спрашиваем имя игрока
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // условие игры
  console.log('What is the result of the expression?');

  // функция поиска целого числа в заданном диапазоне
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // Функция пояска случайного оператора
  function getRandomOperand() {
    const operands = ['+', '-', '*'];
    const randomOperand = Math.floor(Math.random() * (operands.length));
    return operands[randomOperand];
  }

  const firstNumberFistQuestion = getRandomIntInclusive(0, 100);
  const secondNumberFirstQuestion = getRandomIntInclusive(0, 100);
  const operandFirstQuestion = getRandomOperand();

  let resultFirstQuestion = '';

  if (operandFirstQuestion === '+') {
    resultFirstQuestion = firstNumberFistQuestion + secondNumberFirstQuestion;
  } else if (operandFirstQuestion === '-') {
    resultFirstQuestion = firstNumberFistQuestion - secondNumberFirstQuestion;
  } else {
    resultFirstQuestion = firstNumberFistQuestion * secondNumberFirstQuestion;
  }

  const resultFirstQuestionString = resultFirstQuestion.toString();

  console.log(`Question: ${firstNumberFistQuestion} ${operandFirstQuestion} ${secondNumberFirstQuestion}`);
  const firstResponse = readlineSync.question('Your answer: ');

  if (replyToUser(firstResponse, resultFirstQuestionString) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${firstResponse}' is wrong answer ;(. Correct answer was '${resultFirstQuestionString}'.\nLet's try again, ${name}!`);
  }

  const firstNumberSecondQuestion = getRandomIntInclusive(0, 100);
  const secondNumberSecondQuestion = getRandomIntInclusive(0, 100);
  const operandSecondQuestion = getRandomOperand();

  let resultSecondQuestion = '';

  if (operandSecondQuestion === '+') {
    resultSecondQuestion = firstNumberSecondQuestion + secondNumberSecondQuestion;
  } else if (operandSecondQuestion === '-') {
    resultSecondQuestion = firstNumberSecondQuestion - secondNumberSecondQuestion;
  } else {
    resultSecondQuestion = firstNumberSecondQuestion * secondNumberSecondQuestion;
  }

  const resultSecondQuestionString = resultSecondQuestion.toString();

  console.log(`Question: ${firstNumberSecondQuestion} ${operandSecondQuestion} ${secondNumberSecondQuestion}`);
  const secondResponse = readlineSync.question('Your answer: ');

  if (replyToUser(secondResponse, resultSecondQuestionString) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${secondResponse}' is wrong answer ;(. Correct answer was '${resultSecondQuestionString}'.\nLet's try again, ${name}!`);
  }

  const firstNumberThirdQuestion = getRandomIntInclusive(0, 100);
  const secondNumberThirdQuestion = getRandomIntInclusive(0, 100);
  const operandThirdQuestion = getRandomOperand();

  let resultThirdQuestion = '';

  if (operandThirdQuestion === '+') {
    resultThirdQuestion = firstNumberThirdQuestion + secondNumberThirdQuestion;
  } else if (operandThirdQuestion === '-') {
    resultThirdQuestion = firstNumberThirdQuestion - secondNumberThirdQuestion;
  } else {
    resultThirdQuestion = firstNumberThirdQuestion * secondNumberThirdQuestion;
  }

  const resultThirdQuestionString = resultThirdQuestion.toString();

  console.log(`Question: ${firstNumberThirdQuestion} ${operandThirdQuestion} ${secondNumberThirdQuestion}`);
  const thirdResponse = readlineSync.question('Your answer: ');

  if (replyToUser(thirdResponse, resultThirdQuestionString) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${thirdResponse}' is wrong answer ;(. Correct answer was '${resultThirdQuestionString}'.\nLet's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};
