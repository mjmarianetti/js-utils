'use strict';


class StatisticUtil {

  constructor () {}

  static max(array) {
    return Math.max.apply(null, array);
  }

  static min(array) {
    return Math.min.apply(null, array);
  }

  static range(array) {
    return StatisticUtil.max(array) - StatisticUtil.min(array);
  }

  static midrange(array) {
    return StatisticUtil.range(array) / 2;
  }

  static sum(array) {
    let num = 0;
    for (let i = 0, l = array.length; i < l; i++) {
      num += array[i];
    }
    return num;
  }

  static mean(array) {
    return StatisticUtil.sum(array) / array.length;
  }

  static median(array) {
    array.sort(
      (a, b) => {
        return a - b;
      }
    );
    let mid = array.length / 2;
    return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
  }

  static modes(array) {
    if (!array.length) {
      return [];
    }
    let modeMap = {},
    maxCount = 0,
    modes = [];

    array.forEach(
      (val) => {
        if (!modeMap[val]) {
          modeMap[val] = 1;
        }
        else {
          modeMap[val]++;
        }
        if (modeMap[val] > maxCount) {
          modes = [val];
          maxCount = modeMap[val];
        }
        else if (modeMap[val] === maxCount) {
          modes.push(val);
          maxCount = modeMap[val];
        }
      });
      return modes;
    }

    static letiance(array) {
      let mean = StatisticUtil.mean(array);
      return StatisticUtil.mean(
        array.map(
          (num) => {
            return Math.pow(num - mean, 2);
          }
        )
      );
    }

    static standardDeviation(array) {
      return Math.sqrt(StatisticUtil.letiance(array));
    }

    static meanAbsoluteDeviation(array) {
      let mean = StatisticUtil.mean(array);
      return StatisticUtil.mean(
        array.map(
          (num) => {
            return Math.abs(num - mean);
          }
        )
      );
    }

    static zScores(array) {
      let mean = StatisticUtil.mean(array);
      let standardDeviation = StatisticUtil.standardDeviation(array);
      return array.map(
        (num) => {
          return (num - mean) / standardDeviation;
        }
      );
    }

  }


  module.exports = StatisticUtil;
