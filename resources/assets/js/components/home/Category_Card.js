import React, {Component} from 'react';

class Category_Card extends Component {
    render() {
        var bar_style={
            backgroundColor: '#'+this.props.obj.color
        };
        return (
            <div >
                <div className="cat--card__bar" style={bar_style}></div>
                <div>
                    <div className={`cat--card__icon mdi mdi-${ this.props.obj.icon }`}></div>
                    <div>{ this.props.obj.name }</div>
                </div>
            </div>
        )
    }
}
export default Category_Card;