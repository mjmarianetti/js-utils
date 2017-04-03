'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const ArrayUtil = require('../src/utils/arrayUtil');


describe('ArrayUtil', () => {

  let testArray = [
    'test',
    'apple',
    'microsoft',
    'linux'
  ];

  describe('contains', () => {

    it('should return true if it contains an element', () => {
      let element = 'test';

      let result = ArrayUtil.contains(element, testArray);

      expect(result).to.be.eql(true);
    });

    it('should return false if it does not contains an element', () => {
      let element = 'test123213';

      let result = ArrayUtil.contains(element, testArray);

      expect(result).to.be.eql(false);
    });

    it('should return false if element is null', () => {
      let result = ArrayUtil.contains(null, testArray);
      expect(result).to.be.eql(false);
    });

    it('should return false if it does not contains an element', () => {
      let element = 'test123213';

      let result = ArrayUtil.contains(element, []);

      expect(result).to.be.eql(false);
    });

    it('should return false if it does not contains an element', () => {
      let element = 'test123213';

      let result = ArrayUtil.contains(element, {});

      expect(result).to.be.eql(false);
    });


  });

});
