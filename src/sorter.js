const normalise = word => {
  return word.replace(/['!?-]/g, '').toLowerCase();
};

const sortAlpha = word => {
  return word.split('').sort().join('');
};

module.exports = {normalise, sortAlpha};
