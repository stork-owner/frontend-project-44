export default (text) => {
  if (text === '') {
    return '';
  }
  const [firstChar, ...restText] = text;
  return `${firstChar.toUpperCase()}${restText.join('')}`;
};
