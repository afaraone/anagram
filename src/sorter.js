const normalise = word => {
  return word.replace(/['!?-]/g, '').toLowerCase();
};

module.exports = {normalise};
