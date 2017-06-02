'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const ObjectUtil = require('../src/utils/objectUtil');


describe('ObjectUtil', () => {


  describe('clone', () => {

    it('should clone an object', () => {
      let element = {
        name: 'test',
        email: 'test@test.com'
      };

      let result = ObjectUtil.clone(element);

      expect(result).to.be.eql(element);
    });

  });

});
