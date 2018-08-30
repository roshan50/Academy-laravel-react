import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div className="login-pannel d-flex flex-column flex-lg-row justify-content-center">
                <div className="login col-lg-5 d-flex flex-column align-items-center">
                    <h1 className="text-center">ورود به سامانه</h1>
                    <div className="d-flex input-div">
                        <div className="mdi mdi-cellphone-android input-mdi"></div>
                        <input type="text" className="input-style" placeholder="شماره همراه"/>
                    </div>
                    <div className="d-flex input-div">
                        <div className="mdi mdi-lock-outline input-mdi"></div>
                        <input type="text" className="input-style" placeholder="رمز عبور"/>
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" className="login-checkbox"/>
                        <label for="" className="login-label">مرا بخاطر بسپار</label>
                    </div>
                    <button className="bg-secondary mdi mdi-account-key btn-login">ورود به سامانه</button>
                </div>
            </div>
        )
    }
}
