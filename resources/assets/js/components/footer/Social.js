import React, { Component } from 'react';


export default class Social extends Component {
    render() {
        return (
            <ul className="social flex-nowrap flex-lg-wrap list-unstyled">
                <li className="my-list-group-item mdi mdi-telegram"></li>
                <li className="my-list-group-item mdi mdi-instagram"></li>
                <li className="my-list-group-item mdi mdi-google-plus"></li>
                <li className="my-list-group-item mdi mdi-facebook"></li>
                <li className="my-list-group-item mdi mdi-twitter"></li>
            </ul>
        );
    }
}
