import React, {Component} from 'react';

class Course extends Component {
    render() {
        var header_style={
            backgroundColor: '#'+this.props.obj.color
        };
        var read_style={
            color: '#'+this.props.obj.color
        };

        return (
            <div className="col-md-4">
            <div className="card">
                <div className="card__header d-flex justify-content-around" style={header_style}>
                    <div className="card__play mdi mdi-play-circle-outline"></div>
                    <div className="card__header__middle">
                        <div className={`card__icon mdi mdi-${ this.props.obj.icon }`}></div>
                        <ul className="progress-bar d-flex flex-row list-unstyled">
                            <li className="circle"></li>
                            <li className="dash"></li>
                            <li className="circle"></li>
                            <li className="dash"></li>
                            <li className="circle"></li>
                            <li className="dash"></li>
                            <li className="circle"></li>
                            <li className="dash"></li>
                            <li className="circle--outline"></li>
                            <li className="dash"></li>
                            <li className="circle--outline"></li>
                        </ul>
                    </div>
                    <div className="card__star mdi mdi-star-outline"></div>
                </div>
                <div className="card__body mr-b-20">
                    <div className="card__body__title">
                        {this.props.obj.title}
                    </div>
                    <div className="text-justify mr-b-20">
                        {this.props.obj.description}
                    </div>
                </div>
                <div className="card__footer d-flex justify-content-between border-top">
                    <div className="card__time mdi mdi-clock-outline">66 دقیقه گذرانده شده</div>
                    <a className="continue d-flex" style={read_style}>ادامه بخش<div className="continue__icon mdi mdi-chevron-left-box"></div></a>
                </div>
            </div>
            </div>
        )
    }
}
export default Course;