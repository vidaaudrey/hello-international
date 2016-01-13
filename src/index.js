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
  return languageList[_randomLangIndex]
}

const getRandomGreeting = function (message, language) {
  // if the message is not supported, default to 'hello'
  if (!(message in langData)) {
    message = 'hello';
  }
  language = language || getRandomLanguage()
  console.log('lan', language)
  return langData[message][language]
}

module.exports = {
  all: langData,
  allMessages: Object.keys(langData),
  numberOfLanguages: numberOfLanguages,
  languageList: languageList,
  getRandomGreeting: getRandomGreeting,
  getRandomLanguage: getRandomLanguage,
  randomIndex: _.random(numberOfLanguages - 1)
}
