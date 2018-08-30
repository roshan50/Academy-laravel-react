import React, { Component } from 'react';


export default class Bottom_Menu extends Component {
    render() {
        return (
            <ul className="bottom-menu list-unstyled">
                <li className="my-list-group-item mdi mdi-chevron-left">
                    <a href="/">
                        صفحه نخست
                    </a>
                </li>
                <li className="my-list-group-item mdi mdi-chevron-left">
                    <a href="course-detail">
                        دوره های آموزشی
                    </a>
                </li>
                <li className="my-list-group-item mdi mdi-chevron-left">
                    <a href="#">
                        انجمن تخصصی
                    </a>
                </li>
                <li className="my-list-group-item mdi mdi-chevron-left">
                    <a href="">
                        درباره ما
                    </a>
                </li>
                <li className="my-list-group-item mdi mdi-chevron-left">
                    <a href="">
                        تماس با ما
                    </a>
                </li>
            </ul>
        );
    }
}
