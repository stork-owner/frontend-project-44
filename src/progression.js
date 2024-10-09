import readlineSync from 'readline-sync';
import replyToUser from './index.js';

console.log('Welcome to the Brain Games!');

export default () => {
  // спрашиваем имя игрока
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // условие игры
  console.log('What number is missing in the progression?');

  // функция поиска целого числа в заданном диапазоне
  function getRandomIntInclusive(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
  }

  const firstArray = [getRandomIntInclusive(1, 9)];

  for (let i = 0; i < 9; i += 1) {
    firstArray.push(firstArray[i] + 2);
  }

  const randomElementFirstArray = getRandomIntInclusive(0, 9);

  const valueFirstRandomElementArray = firstArray[randomElementFirstArray];

  const firstHiddenArray = firstArray;
  firstHiddenArray[randomElementFirstArray] = '..';

  console.log(`Question: ${firstHiddenArray[0]} ${firstHiddenArray[1]} ${firstHiddenArray[2]} ${firstHiddenArray[3]} ${firstHiddenArray[4]} ${firstHiddenArray[5]} ${firstHiddenArray[6]} ${firstHiddenArray[7]} ${firstHiddenArray[8]} ${firstHiddenArray[9]}`);
  const firstResponse = readlineSync.question('Your answer: ');

  if (replyToUser(Number(firstResponse), valueFirstRandomElementArray) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${firstResponse}' is wrong answer ;(. Correct answer was '${valueFirstRandomElementArray}'.\nLet's try again, ${name}!`);
  }

  const secondArray = [getRandomIntInclusive(1, 9)];

  for (let i = 0; i < 9; i += 1) {
    secondArray.push(secondArray[i] + 3);
  }

  const randomElementSecondArray = getRandomIntInclusive(0, 9);

  const valueSecondRandomElementArray = secondArray[randomElementSecondArray];

  const secondHiddenArray = secondArray;
  secondHiddenArray[randomElementSecondArray] = '..';

  console.log(`Question: ${secondHiddenArray[0]} ${secondHiddenArray[1]} ${secondHiddenArray[2]} ${secondHiddenArray[3]} ${secondHiddenArray[4]} ${secondHiddenArray[5]} ${secondHiddenArray[6]} ${secondHiddenArray[7]} ${secondHiddenArray[8]} ${secondHiddenArray[9]}`);
  const secondResponse = readlineSync.question('Your answer: ');

  if (replyToUser(Number(secondResponse), valueSecondRandomElementArray) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${secondResponse}' is wrong answer ;(. Correct answer was '${valueSecondRandomElementArray}'.\nLet's try again, ${name}!`);
  }

  const thirdArray = [getRandomIntInclusive(1, 9)];

  for (let i = 0; i < 9; i += 1) {
    thirdArray.push(thirdArray[i] + 4);
  }

  const randomElementThirdArray = getRandomIntInclusive(0, 9);

  const valueThirdRandomElementArray = thirdArray[randomElementThirdArray];

  const thirdHiddenArray = thirdArray;
  thirdHiddenArray[randomElementThirdArray] = '..';

  console.log(`Question: ${thirdHiddenArray[0]} ${thirdHiddenArray[1]} ${thirdHiddenArray[2]} ${thirdHiddenArray[3]} ${thirdHiddenArray[4]} ${thirdHiddenArray[5]} ${thirdHiddenArray[6]} ${thirdHiddenArray[7]} ${thirdHiddenArray[8]} ${thirdHiddenArray[9]}`);
  const thirdResponse = readlineSync.question('Your answer: ');

  if (replyToUser(Number(thirdResponse), valueThirdRandomElementArray) === true) {
    console.log('Correct!');
  } else {
    return console.log(`'${thirdResponse}' is wrong answer ;(. Correct answer was '${valueThirdRandomElementArray}'.\nLet's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};
