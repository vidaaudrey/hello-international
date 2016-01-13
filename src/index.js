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


function getRandomText(key) {
  // get random index for random language
  const _randomLangIndex = _.random(numberOfLanguages - 1)
  return langData[key][_randomLangIndex]['text']
}

module.exports = {
  all: langData,
  numberOfLanguages: numberOfLanguages,
  languageList: Object.keys(langData),
  randomHello: getRandomText('hello'),
  randomGoodbye: getRandomText('goodbye')
}
