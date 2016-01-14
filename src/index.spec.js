"use strict";
const expect = require('chai').expect
const helloLib = require('./index')
const _ = require('lodash')

describe('hello-international lib', function () {
  describe('all', function () {
    it('should be an nested object', function () {
      expect(helloLib.all).to.satisfy(isNestedObject)

      function isNestedObject(obj) {
        return (typeof obj === 'object') && (typeof obj['hello'] === 'object')
      }
    })
    it('should contain `你好！（您好）` under hello -> Chinese -> text', function () {
      expect(helloLib.all['hello']['Chinese']).to.equal('你好！（您好）')
    })

    it('should have equal number of available languages with each phrase', function () {
      const len = Object.keys(helloLib.all.hello).length
      for (const key in helloLib.all) {
        expect(Object.keys(helloLib.all[key]).length).to.equal(len)
      }
    });
  })


  describe('allMessages', function () {
    it('should be an array', function () {
      expect(helloLib.allMessages).to.be.an('array')
    })
  })

  describe('numberOfLanguages', function () {
    it('should return the total number of languages', function () {
      expect(helloLib.numberOfLanguages).to.equal(6)
    })
  })

  describe('languageList', function () {
    it('should contain a list of supported languages', function () {
      const languageList = ['Abkhaz', 'Adyghe', 'Afrikaans', 'Aklan', 'Chinese', 'English']

      //http://stackoverflow.com/questions/17526805/chai-test-array-equality-doesnt-work-as-expected
      // For expect, .equal will compare objects rather than their data, and in your case it is two different arrays.
      // Use .eql in order to deeply compare values. Check out this link.
      // Or you could use .deep.equal in order to simulate same as .eql.
      // Or in your case you might want to check .members.
      expect(helloLib.languageList).to.deep.equal(languageList)
    })
  })


  describe('getRandomGreeting', function () {
    it('should return a random hello greeting when no args are supplied', function () {
      const randomGreeting = helloLib.getRandomGreeting()
      expect(_.values(helloLib.all.hello)).to.include(randomGreeting)
    })

    it('should return a random greeting when message arg is supplied', function () {
      // const allMessages = helloLib.allMessages
      const randomGreeting = helloLib.getRandomGreeting('goodbye')
      expect(_.values(helloLib.all.goodbye)).to.include(randomGreeting)
    })

    it('should return a the right greeting when both message and languages args are supplied', function () {
      // const allMessages = helloLib.allMessages
      const randomGreeting = helloLib.getRandomGreeting('hello', 'English')
      expect(helloLib.all.hello.English).to.equal(randomGreeting)

    })
  })

  describe('getRandomLanguage', function () {
    const languageList = helloLib.languageList
    const randomLanguage = helloLib.getRandomLanguage()
    expect(languageList).to.include(randomLanguage)
  })

  describe('randomIndex', function () {
    it('should return a number between 0 and the length of languageList', function () {
      const len = helloLib.languageList.length
      const randomIndex = helloLib.randomIndex
        // expect(len).to.be.at.most(len)
      expect(randomIndex).to.be.within(-1, len + 1)
    })
  })

  describe('randomGreetings', function () {
    it('should return one greeting when no argument is specified', function () {
      expect(helloLib.getRandomGreetings()).to.be.a('string')
      expect(helloLib.getRandomGreetings('notANumber')).to.be.a('string')
    })

    it('should return a list of greetings when the number argument is specified', function () {
      const result = helloLib.getRandomGreetings(3)
      const hellos = _.values(helloLib.all.hello)
      expect(result).to.have.length.of(3)
      result.forEach(function (item) {
        expect(hellos).to.include(item)
      })
    })
  })







})
