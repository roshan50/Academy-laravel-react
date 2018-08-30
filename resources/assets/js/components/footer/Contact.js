import React, { Component } from 'react';


export default class Contact extends Component {
    render() {
        return (
            <ul className="contact d-none d-lg-block list-unstyled">
                <li className="my-list-group-item mdi mdi-email">info@academy.com</li>
                <li className="my-list-group-item mdi mdi-phone">025-32855654</li>
                <li className="my-list-group-item mdi mdi-cellphone">09123456789</li>
            </ul>
        );
    }
}
