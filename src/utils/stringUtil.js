'use strict';


class StringUtil {

    constructor () {}

    static replaceAll(str, find, replace) {

        if(!replace) {
          return str;
        }

        return str.replace(new RegExp(find, 'g'), replace);
    }

    static pad(originalNumber, width, numberToAdd) {
      if(!originalNumber){
        return originalNumber;
      }
      numberToAdd = numberToAdd || '0';
      originalNumber = originalNumber + '';
      return originalNumber.length >= width ? originalNumber : new Array(width - originalNumber.length + 1).join(numberToAdd) + originalNumber;
    }

}


module.exports = StringUtil;
