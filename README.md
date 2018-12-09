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
 
 
 
 ### As a server
 - Run `npm start` to initialize the sever.
 - Visit `http:localhost:3000/:word` to perform an anagram search, where `:word` is the input.
 - If any anagrams are found, they are returned as a JSON object.
 - If none are found, an empty array is returned.
 - If the word is not found in the dictionary, an error message is returned.
 
Since it is on a server, it can be fetched in an HTTP request. This means it can work with a front-end app such as React.
```
fetch('http://localhost:3000/table')
  .then(res => res.json())
  .then(json => console.log(json));
```
```
["ablet","blate","bleat"]
```
