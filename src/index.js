"use strict";

const langData = require('./lang.json')
const _ = require('lodash')

// total number of greetings
let _numberOfGreetings = 0
for (let key in langData) {
  _numberOfGreetings++;
}


const languageList = Object.keys(langData['hello'])
  // total number of available languages 
const numberOfLanguages = languageList.length

const getRandomLanguage = function () {
  // get random index for random language
  const _randomLangIndex = _.random(numberOfLanguages - 1)
  const _randomLang = languageList[_randomLangIndex]
}

const getRandomGreeting = function (key) {
  // if the key is not supported, default to 'hello'
  if (!(key in langData)) {
    key = 'hello';
  }
  return langData[key][getRandomLanguage()]
}

module.exports = {
  all: langData,
  numberOfLanguages: numberOfLanguages,
  languageList: languageList,
  randomGreeting: getRandomGreeting,
  randomLanguage: getRandomLanguage,
  randomIndex: _.random(numberOfLanguages - 1)
}
