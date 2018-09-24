import React, { Component } from 'react';
import Login from './login/Login';
import Register from './login/Register';

export default class Login_Page extends Component {
    render() {
        return (
            <div className="main bg-login">

                <div className="container-fluid d-flex justify-content-center">
                    <div className="container">
                        <div className="banner-login__image d-flex justify-content-center">
                            <div className="col-10 col-md-8 col-lg-5">
                                <img className="" src="images/login-img.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="login-pannel d-flex flex-column flex-lg-row justify-content-center">
                            <Login/>

                            <div className="col-lg-1 d-none d-lg-block">
                                <div className="d-flex justify-content-center"><div className="login-border-left"></div></div>
                                <div className="or text-center">یا</div>
                                <div className="d-flex justify-content-center"><div className="login-border-left"></div></div>
                            </div>

                            <Register/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
