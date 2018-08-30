import React, { Component } from 'react';


export default class Payment extends Component {
    render() {
        return (
            <ul className="payment d-flex justify-content-center flex-row-reverse list-unstyled">
                <li><img src="images/resaneh.jpg" alt=""/></li>
                <li><img src="images/nemad.png" alt=""/></li>
                <li className="d-flex align-items-center"><img src="images/payment.jpg" alt=""/></li>
            </ul>
        );
    }
}
