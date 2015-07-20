(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsForm = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

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

},{"react":"react"}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var castArray = function castArray(array) {
	return Array.isArray(array) ? array : [array];
};
exports.castArray = castArray;

},{}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

var _hireFormsUtils = _dereq_("hire-forms-utils");

exports["default"] = function (ComposedComponent) {
	var classNames = arguments[1] === undefined ? [] : arguments[1];

	var Form = (function (_React$Component) {
		function Form() {
			_classCallCheck(this, Form);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(Form, _React$Component);

		_createClass(Form, [{
			key: "handleChange",
			value: function handleChange(key, value) {
				var attr = (0, _hireFormsUtils.castArray)(this.props.attr);

				this.props.onChange(attr.concat(key), value);
			}
		}, {
			key: "handleDelete",
			value: function handleDelete(key) {
				var attr = (0, _hireFormsUtils.castArray)(this.props.attr);

				this.props.onDelete(attr.concat(key));
			}
		}, {
			key: "handleInvalid",
			value: function handleInvalid(key) {
				var attr = (0, _hireFormsUtils.castArray)(this.props.attr);

				this.props.onInvalid(attr.concat(key));
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "hire-forms-form " + (0, _hireFormsUtils.castArray)(classNames).join(" ") },
					_react2["default"].createElement(ComposedComponent, _extends({}, this.props, {
						handleChange: this.handleChange,
						handleDelete: this.handleDelete,
						handleInvalid: this.handleInvalid }))
				);
			}
		}]);

		return Form;
	})(_react2["default"].Component);

	Form.propTypes = {
		// The array can consist of strings and numbers.
		attr: _hireFormsPropTypes.stringOrArray,
		onChange: _react2["default"].PropTypes.func.isRequired,
		onDelete: _react2["default"].PropTypes.func,
		onInvalid: _react2["default"].PropTypes.func,
		value: _react2["default"].PropTypes.object
	};

	Form.defaultProps = {
		attr: []
	};

	return Form;
};

module.exports = exports["default"];

},{"hire-forms-prop-types":1,"hire-forms-utils":2,"react":"react"}]},{},[3])(3)
});
