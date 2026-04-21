"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var summarizeUsers = function summarizeUsers() {
  var users = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return users.map(function (_ref) {
    var name = _ref.name,
        _ref$age = _ref.age,
        age = _ref$age === undefined ? 0 : _ref$age;
    return name + " (" + age + ")";
  }).join(", ");
};

var Report = function () {
  function Report() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Report);

    this.items = items;
  }

  _createClass(Report, [{
    key: "print",
    value: function print() {
      console.log("Transpiled report: " + summarizeUsers(this.items));
    }
  }]);

  return Report;
}();

var users = [{ name: "Ava", age: 31 }, { name: "Max" }, { name: "Lia", age: 27 }];

new Report(users).print();
