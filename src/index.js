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


const getRandomGreetings = function (count) {
  if (!count || isNaN(count)) {
    return getRandomGreeting()
  }
  let result = []
  for (let i = 0; i < count; i++) {
    result.push(getRandomGreeting())
  }
  return result

}

const randomMessageList = function () {
  const allMessages = Object.keys(langData)
  return allMessages.filter((item, index) => index % 2 === 0)
}

module.exports = {
  all: langData,
  allMessages: Object.keys(langData),
  numberOfLanguages: numberOfLanguages,
  languageList: languageList,
  getRandomGreeting,
  getRandomGreetings,
  getRandomLanguage,
  randomMessageList,
  randomIndex: _.random(numberOfLanguages - 1)
}
