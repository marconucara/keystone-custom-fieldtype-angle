import React from 'react';
import numeral from 'numeral';
import ItemsTableCell from 'keystone/fields/components/ItemsTableCell';
import ItemsTableValue from 'keystone/fields/components/ItemsTableValue';

var AngleColumn = React.createClass({
	displayName: 'AngleColumn',
	propTypes: {
		col: React.PropTypes.object,
		data: React.PropTypes.object,
	},
	renderValue () {
		const value = this.props.data.fields[this.props.col.path];
		if (!value || isNaN(value)) return null;

		const formattedValue = (this.props.col.path === 'money') ? numeral(value).format('$0,0.00') : value;

		return formattedValue;
	},
	render () {
		return (
			<ItemsTableCell>
				<ItemsTableValue field={this.props.col.type}>
					{this.renderValue()}
				</ItemsTableValue>
			</ItemsTableCell>
		);
	},
});

module.exports = AngleColumn;