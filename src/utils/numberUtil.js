'use strict';


class NumberUtil {

  constructor() {}

  static random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}


module.exports = NumberUtil;
