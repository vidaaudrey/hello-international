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


  describe('randomGreeting', function () {
    it('should return a random hello greeting when no args are supplied', function () {
      const randomGreeting = helloLib.randomGreeting()
      expect(_.values(helloLib.all.hello)).to.include(randomGreeting)
    });
  });




})
