'use strict';


class ArrayUtil {

  constructor () {}

  static contains(needle,arrhaystack) {

    if(!Array.isArray(arrhaystack)){
      return false;
    }

    return (arrhaystack.indexOf(needle) > -1);
  }

  static isEmpty(arr){
    return arr.length === 0;
  }

  static remove(element, arr) {
    let index = arr.indexOf(element);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

}


module.exports = ArrayUtil;
