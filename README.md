## Hello-International - Common Greetings in 10+ Languages 

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)](https://travis-ci.org/vidaaudrey/hello-international)
[![npm](https://img.shields.io/npm/dm/localeval.svg?style=flat-square)](https://www.npmjs.com/package/hello-international)
[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/hello-international)
[![codecov coverage](https://img.shields.io/codecov/c/github/vidaaudrey/hello-international.svg?style=flat-square)](https://codecov.io/github/vidaaudrey/hello-international)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)


###Installation
`npm install hello-internation --save`

### How to use 
```javascript 
var lib = require('hello-international');

setInterval(function () {
    console.log(lib.getRandomGreeting('hello'));
 }, 1000);

console.log(lib.getRandomGreeting());
```

### Available APIs
* Properties
  - lib.all:  all the language data
  - lib.allMessages: return all supported messages, currently only support 'hello', 'goodbye'
  - lib.numberOfLanguages: totol number of supported languages
  - lib.languageList: all supported languages in an array 
  - lib.randomIndex: return a random Index, userful if you want to do something before getting the random language / greeting

* Methods: 
  - lib.getRandomGreeting(optionalMessageArg, optionalLanguageArg): random greeting, if optionalMessageArg and optionalLanguageArg are provided and valid, will return specified greeting data 
  - lib.getRandomLanguage(): return a random Language 

  - lib.randomGreetings(optionalCount): return a list of random greetings, if the count is not specified or not valid, will only return one random greeting



Author: [Audrey](http://audreyli.me) 

