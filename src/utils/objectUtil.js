'use strict';


class ObjectUtil {

  constructor() {}

  static clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }


}


module.exports = ObjectUtil;
