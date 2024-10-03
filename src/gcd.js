import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export default () => {
  // спрашиваем имя игрока
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // условие игры
  console.log('Find the greatest common divisor of given numbers.');

  // функция поиска целого числа в заданном диапазоне
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const firstNumber = getRandomIntInclusive(1, 100);
  const secondNumber = getRandomIntInclusive(1, 100);

  console.log(firstNumber);
  console.log(secondNumber);

  const correctFirstNumber = () => {
    let i = firstNumber;

    while (i % 2 === 0) {
      i += 1;
    }
    console.log(i);
  };

  const correctSecondNumber = () => {
    let i = secondNumber;

    while (i % 2 === 0) {
      i += 1;
    }
    console.log(i);
  };

  correctFirstNumber(firstNumber);
  correctSecondNumber(secondNumber);

  const del = () => {
    let i = 67;

    while (i)
  };
};
