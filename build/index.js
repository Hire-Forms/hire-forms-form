(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsForm = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
/**
 * A string or an object,
 * example: {key: "somekey", value: "somevalue"}.
 */
var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
})]);

exports.stringOrKeyValue = stringOrKeyValue;
var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

exports.stringOrArrayOfString = stringOrArrayOfString;
var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
}));

exports.arrayOfKeyValue = arrayOfKeyValue;
/**
 * An array of strings or an array of key/value objects,
 * example: [{key: "somekey", value: "somevalue"}].
 */
var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
}))]);
exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;

},{"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var castArray = function castArray(array) {
	return Array.isArray(array) ? array : [array];
};
exports.castArray = castArray;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _hireFormsPropTypes = require("hire-forms-prop-types");

var _hireFormsUtils = require("hire-forms-utils");

exports["default"] = {
	propTypes: {
		// The array can consist of strings and numbers.
		attr: _hireFormsPropTypes.stringOrArray,
		onChange: _react2["default"].PropTypes.func.isRequired,
		onDelete: _react2["default"].PropTypes.func,
		onInvalid: _react2["default"].PropTypes.func,
		value: _react2["default"].PropTypes.object
	},

	getDefaultProps: function getDefaultProps() {
		return {
			attr: []
		};
	},

	handleChange: function handleChange(key, value) {
		var attr = (0, _hireFormsUtils.castArray)(this.props.attr);

		this.props.onChange(attr.concat(key), value);
	},

	handleDelete: function handleDelete(key) {
		var attr = (0, _hireFormsUtils.castArray)(this.props.attr);

		this.props.onDelete(attr.concat(key));
	},

	handleInvalid: function handleInvalid(key) {
		var attr = (0, _hireFormsUtils.castArray)(this.props.attr);

		this.props.onInvalid(attr.concat(key));
	}
};
module.exports = exports["default"];

},{"hire-forms-prop-types":1,"hire-forms-utils":2,"react":"react"}]},{},[3])(3)
});