# Hire-Forms Form

React mixin for creating a HireForm.

## Example

Create a component (OriginForm) and wrap it with the higher order component (form).

	import React from "react";
	import form from "hire-forms-form";
	import Select from "hire-forms-select";

	class OriginForm {
		render() {
			let model = this.props.value;

			return (
				<ul>
					<li>
						<label>Country</label>
						<Select
							onChange={this.props.onChange.bind(this, "country")}
							options={["Belgium", "Luxembourg", "The Netherlands"]}
							value={model.get("country")} />
					</li>
				</ul>
			);
		}
	}

	export default form(OriginForm);

## Why doesn't HireForms Form use the <form>-tag?

HireForms Form components should be able to be nested. For example when
using HireForms MultiForm. It is not allowed to nest `<form>`s.