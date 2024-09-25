import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export default () => {
  // спрашиваем имя игрока
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // условие игры
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // функция поиска целого числа в заданном диапазоне
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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

  if (firstResponse === parityFirstNumber) {
    console.log('Correct!');
  } else {
    return console.log(`${firstResponse} is wrong answer ;(. Correct answer was ${parityFirstNumber}.
  Let's try again, ${name}!`);
  }

  return console.log('It WORK!');
};
