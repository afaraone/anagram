# Anagram Solver Tech Test
A simple web API that returns all possible anagrams for a given word. It uses word entries from this [link](http://codekata.com/data/wordlist.txt). Made as a tech test for Apolitical.

## Setup
 - Clone the repository.
 - Run `npm install` to install dependencies. This will install testing frameworks (Mocha, Chai, Sinon) and create `anagrams.txt` file.

## Use
 ### In CLI
 - Run `node`
 - Run `const solver = require('./src/solver')`
 - The function `solve` takes a string as an argument, and returns a list of anagrams.
 
 ```
 > const solve = require('./src/solver')

> solve('andres')
[ 'Andre\'s',
  'Andres',
  'Daren\'s',
  'Redan\'s',
  'denars',
  'redans',
  'sander',
  'snared' ]
```

 - If no possible anagrams are found, an empty array is returned.
 ```
 > solve('chocolate')
[]
```
 
 - If the word does not exist in the dictionary, an error message is returned.
```
> solve('hdf')
'Entry not found'
```
  
 ### As a server
 - Run `npm start` to initialize the sever.
 - The path `http:localhost:3000/:word` returns the anagram search, where `:word` is the input.
 
Since it is on a server, it can be fetched in an HTTP request. This means it can work with a front-end app such as React.
```
fetch('http://localhost:3000/table')
  .then(res => res.json())
  .then(json => console.log(json));
```
```
["ablet","blate","bleat"]
```

## Tech Stack
 - NodeJS + Request Package
 - Mocha, Chai, Sinon for testing

## Testing
I tried to fully TDD everything, however I had an issue with mocking the `fs` calls for `writeDictionary` method in `src/dictionary.js`
```
> anagram@1.0.0 test /home/andres/Projects/tech-test/anagram
> mocha



  createDictionary
    ✓ turns text into dictionary

  solve
    ✓ reads dictionary file and returns array of anagrams
    ✓ returns empty array if no anagrams
    ✓ returns error message if not in dictionary

  sortWord
    ✓ it sorts word alphabetically
    ✓ normalises word and sorts alphabetically


  6 passing (11ms)
```

## Approach
### Working out an Anagram
My first thought was what functions could make two anagrams have the same value? I decided that the most straightforward was to sort the characters alphabetically. See `src/sorter.js`:
```
> sortWord("dog")
'dgo'
> sortWord("god")
'dgo'
> sortWord("dog") === sortWord("god")
true
```

### Dealing with the word list
The next step was dealing with the text file. Since the text file is quite large (~330k words), I made two realisations. Firstly, simply iterating through the entire list and running `sortWord` is not very efficient. Secondly, reading through a large file in the client side would not be appropriate. Therefore, I decided to make this a Web API that a front-end app can make HTTP requests to.

I created a purpose built anagram dictionary based on the word list. The key is the sorted word and the value is an array of all the actual words :
```
{bgi: ["big", "gib"], dgo: ["dog", "god"] ... }
```

The methods for creating the anagram dictionary are located in `src/dictionary.js`. Calling `writeDictionary` will fetch the text file and write the dictionary to `anagrams.txt`. This process is somewhat slow, however it only needs to be run once. I added a script to `npm postinstall` to make it run automatically.

This way, whenever an anagram request is made, `anagrams.txt` is read, and a hash lookup is performed using the sortedWord as the key:
```
const findAnagramArray = (key, dictionary) => {
  if (dictionary[key] !== undefined) {
    return dictionary[key];
  };
  return 'Entry not found'
};
```

## Reflection
Overall I am quite happy with my attempt. I think I made the correct decision to create a dictionary file. As mentioned before, I'm a bit dissapointed I couldn't succesfully mock the calls to `fs` for testing `writeDictionary`.
Also, given the time frame, I did not manage to create a front-end website to use this API.

## Further Changes
 - Normalise the word list. The word list from CodeKata contains many duplicates. For example:
 ```
 > solve("james")
[ 'Jame\'s', 'James' ]
```
These kinds of entries should all be removed.

 - Make a front-end website using React. Now that I have this API server working, I think the front-end app will be relatively straightforward.
 
 - For the dictionary, it's probably more appropriate to use a database instead of a text file.
 
 - Right now, the app will return an error message if a given word does not exist in the dictionary. It might be good idea to have a function that will write a new entry into the dictionary. This could then be called when the server receives a POST request.
