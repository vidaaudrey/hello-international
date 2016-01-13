"use strict";
const expect = require('chai').expect
const helloLib = require('./index')

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

  });

})
