const replyToUser = (a, b, c) => {
  let result = '';

  if (a === b) {
    result = 'Correct!';
  } else {
    result = `${a} is wrong answer ;(. Correct answer was ${b}.
  Let's try again, ${c}!`;
  }
  return console.log(result);
};

export { replyToUser };
