import React from "react";
import cx from "classnames";

import {stringOrArray} from "hire-forms-prop-types";
import {castArray} from "hire-forms-utils";

export default (ComposedComponent, classNames=[]) => {
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
			return (
				<div className={cx(
					"hire-forms-form",
					classNames
				)}>
					<ComposedComponent
						{...this.props}
						handleChange={this.handleChange.bind(this)}
						handleDelete={this.handleDelete.bind(this)}
						handleInvalid={this.handleInvalid.bind(this)} />
				</div>
			);
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