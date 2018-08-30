import React, { Component } from 'react';

export default class Rate extends Component {
    render() {
        return (
            <div className="teacher__rate star-rating text-warning">
                <span className="mdi mdi-star-outline" data-rating="1"></span>
                <span className="mdi mdi-star-outline" data-rating="2"></span>
                <span className="mdi mdi-star-outline" data-rating="3"></span>
                <span className="mdi mdi-star-outline" data-rating="4"></span>
                <span className="mdi mdi-star-outline" data-rating="5"></span>
                <input type="hidden" name="whatever1" className="rating-value" value="2.56"/>
            </div>
        );
    }
}
