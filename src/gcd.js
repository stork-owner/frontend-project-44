import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export default () => {
  // спрашиваем имя игрока
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // условие игры
  console.log('Find the greatest common divisor of given numbers.');
};
