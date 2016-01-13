"use strict";

const langData = require('./lang.json')
const _ = require('lodash')

// total number of greetings
let _numberOfGreetings = 0
for (let key in langData) {
  _numberOfGreetings++;
}

// total number of available languages 
const numberOfLanguages = langData['hello'].length

const languageList = Object.keys(langData)


const getRandomGreeting = function (key) {
  // if the key is not supported, default to 'hello'
  if (!(key in langData)) {
    key = 'hello';
  }
  // get random index for random language
  const _randomLangIndex = _.random(numberOfLanguages - 1)
  return langData[key][_randomLangIndex]['text']
}

module.exports = {
  all: langData,
  numberOfLanguages: numberOfLanguages,
  languageList: languageList,
  randomGreeting: getRandomGreeting,
  randomIndex: _.random(numberOfLanguages - 1)
}
