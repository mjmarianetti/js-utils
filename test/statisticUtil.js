'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
const expect = chai.expect;

const StatisticUtil = require('../src/utils/statisticUtil');


let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

describe('StatisticUtil', () => {


  describe('max', () => {

    it('should get max value of array', () => {
      expect(StatisticUtil.max(data)).to.be.eql(data.length);
    });

  });

  describe('min', () => {

    it('should get min value of array', () => {
      expect(StatisticUtil.min(data)).to.be.eql(1);
    });

  });


  describe('range', () => {

    it('should get range value of array', () => {
      expect(StatisticUtil.range(data)).to.be.eql(data.length - 1);
    });

  });

  describe('sum', () => {

    it('should get the total value of array', () => {
      expect(StatisticUtil.sum(data)).to.be.eql(210);
    });

  });


  describe('mean / avg', () => {

    it('should get the avg value of array', () => {
      expect(StatisticUtil.mean(data)).to.be.eql(10.5);
    });

  });


  describe('zScores', () => {

    it('should get the zScore value of all the items in the array', () => {
      expect(StatisticUtil.zScores(data)).to.be.not.null;
    });

  });

  describe('zScore', () => {

    it('should get the zScore value of array', () => {
      expect(StatisticUtil.zScore(10,data)).to.be.eql(-0.086710996952412);
    });

  });


});
