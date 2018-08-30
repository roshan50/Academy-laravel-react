import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main_Menu extends Component {
    render() {
        return (
            <div className="container">
                <header className="row">
                    <nav className="navbar navbar-expand-lg w-100">
                        <a href="" className="navbar-brand">
                            <img src="images/brand.png" alt="" />
                        </a>
                        <button className="navbar-toggler navbar-light text-24" data-toggle="collapse" data-target="#navbarMenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse pt-2 pt-lg-0" id="navbarMenu">

                                <ul className="navbar-nav">
                                    <li className="nav-item mdi mdi-home-outline">
                                        <Link to="/" className="nav-link active">صفحه نخست</Link>
                                    </li>
                                    <li className="nav-item mdi mdi-book-open-variant">
                                        <Link to="course-detail" className="nav-link" >دوره های آموزشی</Link>
                                    </li>
                                    <li className="nav-item mdi mdi-account-multiple-outline">
                                        <Link to="profile" className="nav-link">انجمن تخصصی</Link>
                                    </li>
                                    <li className="nav-item mdi mdi-information-outline">
                                        <Link to="login" className="nav-link">درباره ما</Link>
                                    </li>
                                    <li className="nav-item mdi mdi-headset">
                                        <a className="nav-link" href="#">تماس با ما</a>
                                    </li>
                                    <li className="nav-item mdi mdi-account-circle d-lg-none">
                                        <a className="nav-link" href="#">بخش کاربری</a>
                                    </li>

                                </ul>



                            <button className="navbar-btn-user mdi mdi-account-circle bg-primary d-none d-lg-block">
                                بخش کاربری
                            </button>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}
