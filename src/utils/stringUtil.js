'use strict';


class StringUtil {

    constructor () {}

    static isEmpty(str){
      return str.length === 0;
    }

    static isBlank(str){
      return str.trim().length === 0;
    }

    static equals(str1, str2){
        return str1 === str2;
    }

    static contains(str, str2) {
        return str.indexOf( str2 ) !== -1;
    }

    static truncate(str, length){
        return str.substring(0,length);
    }

    static capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

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
