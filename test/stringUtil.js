'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const StringUtil = require('../src/utils/stringUtil');


describe('StringUtil', () => {

  describe('replaceAll', () => {

    it('should replace string', () => {
      let str = 'hello world this is my first hello world',
          find = 'world',
          replace ='test',
          expectedResult = 'hello test this is my first hello test';

      let result = StringUtil.replaceAll(str, find, replace);

      expect(result).to.be.eql(expectedResult);
    });

    it('should return empty string', () => {
      let str = '',
          find = 'world',
          replace ='test',
          expectedResult = '';

      let result = StringUtil.replaceAll(str, find, replace);

      expect(result).to.be.eql(expectedResult);
    });

    it('should return original string if there is no string to find', () => {
      let str = 'hello world this is my first hello world',
          find = null,
          replace ='test',
          expectedResult = str;

      let result = StringUtil.replaceAll(str, find, replace);

      expect(result).to.be.eql(expectedResult);
    });

    it('should return original string if there is no string to replace', () => {
      let str = 'hello world this is my first hello world',
          find = 'world',
          replace = null,
          expectedResult = str;

      let result = StringUtil.replaceAll(str, find, replace);

      expect(result).to.be.eql(expectedResult);
    });

  });



  describe('pad', () => {

    it('should add 0 to string', () => {
      let originalString = '1',
          width = 3,
          numberToAdd = 0,
          expectedResult = '001';

      let result = StringUtil.pad(originalString, width, numberToAdd);

      expect(result).to.be.eql(expectedResult);
    });

    it('should return the original string', () => {
      let originalString = '1',
          width = 0,
          numberToAdd = 0,
          expectedResult = originalString;

      let result = StringUtil.pad(originalString, width, numberToAdd);

      expect(result).to.be.eql(expectedResult);
    });

    it('should return null if the original string is null', () => {
      let originalString = null,
          width = 0,
          numberToAdd = 0,
          expectedResult = originalString;

      let result = StringUtil.pad(originalString, width, numberToAdd);

      expect(result).to.be.eql(expectedResult);
    });



  });


});
