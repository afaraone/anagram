// Creates a sorted word

const normalise = word => {
  return word.replace(/['!?-]/g, '').toLowerCase();
};

const sortAlpha = word => {
  return word.split('').sort().join('');
};

const sortWord = word => {
  return sortAlpha(normalise(word));
};

module.exports = sortWord;
