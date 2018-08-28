'use strict';

exports.__esModule = true;
exports.WheelchairActive = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WheelchairActive = exports.WheelchairActive = function WheelchairActive(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'WheelchairActive' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M7,6 L10,3 L17,6 L17,8 L14,11 M9,22 C12.3137085,22 15,19.3137085 15,16 C15,12.6862915 12.3137085,10 9,10 C5.6862915,10 3,12.6862915 3,16 C3,19.3137085 5.6862915,22 9,22 Z M9,17 C9.55228475,17 10,16.5522847 10,16 C10,15.4477153 9.55228475,15 9,15 C8.44771525,15 8,15.4477153 8,16 C8,16.5522847 8.44771525,17 9,17 Z M14,12 L19,15 L17,21 M19,4 C19.5522847,4 20,3.55228475 20,3 C20,2.44771525 19.5522847,2 19,2 C18.4477153,2 18,2.44771525 18,3 C18,3.55228475 18.4477153,4 19,4 Z M13,10 L17,6 M11,10 L15,6' })
  );
};