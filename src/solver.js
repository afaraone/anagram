// Reads dictionary and returns anagrams for word

const findAnagramArray = (key, dictionary) => {
  if (dictionary[key] !== undefined) {
    return dictionary[key];
  };
  return 'Entry not found'
};

module.exports = {findAnagramArray}
