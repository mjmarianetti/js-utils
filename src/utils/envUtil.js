'use strict';


class EnvUtil {

  constructor () {}

  static loadVar(envVar,value) {
    if(value){
      process.env[envVar] = value;
    }

  }

  static _readVar(envVar){
    return process.env[envVar];
  }

  static read(envVar, defaultValue) {
    let readVariable = EnvUtil._readVar(envVar);
    return (readVariable)? readVariable : defaultValue;
  }

  static getTableName(resource,separator) {
    return [
      EnvUtil.read('MODULE_NAME'),
      EnvUtil.read('STAGE', 'local'),
      resource,
      EnvUtil.read('COMPANY', null),
    ]
    .filter(
      (val) => {
        return val;
      })
      .join(separator);
    }

  }


  module.exports = EnvUtil;
