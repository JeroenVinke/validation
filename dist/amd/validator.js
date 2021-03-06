define(['exports', './validation-error'], function (exports, _validationError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Validator = undefined;

  

  var Validator = exports.Validator = function () {
    function Validator() {
      
    }

    Validator.prototype.validateProperty = function validateProperty(object, propertyName) {
      var rules = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      throw new Error('A Validator must implement validateProperty');
    };

    Validator.prototype.validateObject = function validateObject(object) {
      var rules = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      throw new Error('A Validator must implement validateObject');
    };

    return Validator;
  }();
});