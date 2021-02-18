'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function classDecorator(className) {
  className.flag = true;
  return className;
}

var A = classDecorator(_class = function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: 'update',
    value: function update() {
      console.log('update db');
    }
  }]);

  return A;
}()) || _class;

console.log(new A().update());
