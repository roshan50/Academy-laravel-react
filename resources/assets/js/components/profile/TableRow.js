import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.created_at}
                </td>
                <td>
                    {this.props.obj.cost}
                </td>
                <td>
                    {this.props.obj.steps}
                </td>
            </tr>
        );
    }
}

export default TableRow;