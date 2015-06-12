"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utilsPropTypes = require("../utils/prop-types");

var _utilsAlwaysArray = require("../utils/always-array");

var _utilsAlwaysArray2 = _interopRequireDefault(_utilsAlwaysArray);

exports["default"] = {
	propTypes: {
		// The array can consist of strings and numbers.
		attr: _utilsPropTypes.stringOrArray,
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
		var attr = (0, _utilsAlwaysArray2["default"])(this.props.attr);

		this.props.onChange(attr.concat(key), value);
	},

	handleDelete: function handleDelete(key) {
		var attr = (0, _utilsAlwaysArray2["default"])(this.props.attr);

		this.props.onDelete(attr.concat(key));
	},

	handleInvalid: function handleInvalid(key) {
		var attr = (0, _utilsAlwaysArray2["default"])(this.props.attr);

		this.props.onInvalid(attr.concat(key));
	}
};
module.exports = exports["default"];
