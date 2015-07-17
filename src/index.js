import React from "react";

import {stringOrArray} from "hire-forms-prop-types";
import {castArray} from "hire-forms-utils";

export default ComposedComponent => {
	class Form extends React.Component {
		handleChange(key, value) {
			let attr = castArray(this.props.attr);

			this.props.onChange(attr.concat(key), value);
		}

		handleDelete(key) {
			let attr = castArray(this.props.attr);

			this.props.onDelete(attr.concat(key));
		}

		handleInvalid(key) {
			let attr = castArray(this.props.attr);

			this.props.onInvalid(attr.concat(key));
		}

		render() {
			return <ComposedComponent {...this.props} />;
		}
	}

	Form.propTypes = {
		// The array can consist of strings and numbers.
		attr: stringOrArray,
		onChange: React.PropTypes.func.isRequired,
		onDelete: React.PropTypes.func,
		onInvalid: React.PropTypes.func,
		value: React.PropTypes.object
	};

	Form.defaultProps = {
		attr: []
	};

	return Form;
}