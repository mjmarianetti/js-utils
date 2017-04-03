'use strict';


class ArrayUtil {

  constructor () {}

  static contains(needle,arrhaystack) {

    if(!Array.isArray(arrhaystack)){
      return false;
    }

    return (arrhaystack.indexOf(needle) > -1);
  }

}


module.exports = ArrayUtil;
