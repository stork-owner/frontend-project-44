import readlineSync from 'readline-sync';

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
  const firstOperandFirstQuestion = getRandomOperand();

  let resultFirstQuestion = '';
  if (firstOperandFirstQuestion === '+') {
    resultFirstQuestion = firstNumberFistQuestion + secondNumberFirstQuestion;
  } else if (firstOperandFirstQuestion === '-') {
    resultFirstQuestion = firstNumberFistQuestion - secondNumberFirstQuestion;
  } else {
    resultFirstQuestion = firstNumberFistQuestion * secondNumberFirstQuestion;
  }

  console.log(`${firstNumberFistQuestion} ${firstOperandFirstQuestion} ${secondNumberFirstQuestion}`);
  const firstResponse = readlineSync.question('Your answer: ');

  if (firstResponse === parityFirstNumber) {
    console.log('Correct!');
  } else {
    return console.log(`${firstResponse} is wrong answer ;(. Correct answer was ${parityFirstNumber}.
  Let's try again, ${name}!`);
  }
};
